'use strict';
var express = require('express');
var app = express();
var path = require('path');
var chalk = require('chalk');


var MainController = require('./controllers/MainController.js');

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

MainController.init(app);

app.listen(3000, function () {
  console.log(
  	chalk.cyan('Node, James Node.')
  );
});
