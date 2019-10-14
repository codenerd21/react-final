const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();

// DATABASE:

require('dotenv').config();
require('./config/database');

// MIDDLE:


app.use(logger('dev'));
app.use(express.json());
app.use(require('./config/auth'));

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// API ROUTE:

app.use('/api/users', require('./routes/api/users'));


// CATCH ALL ROUTE:

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// PORT INFORMATION:

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on Port: ${port}`)
});