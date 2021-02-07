const createError = require('http-errors');
const  express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').__express);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


require('./lib/connectDB');
require('./models/Anuncio');
require('./controllers/AnuncioController');


app.use('/apiv1/anuncios', require('./routes/apiv1/anuncios'));


app.locals.title = 'NodePop';

app.use('/',      require('./routes/index'));


app.use((req, res, next) => {
  next(createError(404));
});


app.use((err, req, res, next) => {
  if (err.array) {
    err.status = 422;
    const errInfo = err.array({ onlyFirstError: true })[0];
    err.message = isAPI(req) 
    ? {message: 'Not valid', errors: err.mapped()}
    : `Not valid - ${errInfo.param} ${errInfo.msg}`;
  }
  res.status(err.status || 500);
  if(isAPI(req)) {
    res.json({ success: false, error: err.message});
    return;
  }
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.render('error');
});


const isAPI = req => req.originalUrl.indexOf('/api') === 0;


module.exports = app;
