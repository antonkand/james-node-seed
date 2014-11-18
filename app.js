'use strict';
var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');
var morgan = require('morgan');
var logger = require('express-logger');
var MainController = require('./controllers/MainController.js');

switch (app.get('env')) {
  case 'development':
        app.use(morgan('dev'));
        break;
  case 'production':
        app.use(logger({
          path: __dirname + '/log/requests.log'
        }));
        break;
}

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 1234);

MainController.init(app);

app.listen(app.get('port'), function () {
  console.log(
  	chalk.cyan('Node, James Node. At your service on port ' + app.get('port') + '.')
  );
});
