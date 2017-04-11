'use strict';

let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use ('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.listen(port);