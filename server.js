/* Global Requires */

const express    = require('express');
const logger     = require('morgan');
const bodyParser = require('body-parser');
const path       = require('path');
const app        = express();
const ReactDOM = require('react-dom')
var favicon = require('serve-favicon');


if(process.env.NODE_ENV === 'development') {
  console.log('in development.');
  require('dotenv').config();
} else {
  console.log('in production.');
}

/* App Config */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));

/* Server Initialization */
app.get('/', (req, res) => res.sendFile('index.html'));
var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server initialized on // ${new Date()}`));

//new configs//
