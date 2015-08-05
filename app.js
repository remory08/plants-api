var express    = require('express');
var bodyParser = require('body-parser');
var plants = require('./routes/plants')

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/plants', plants);

app.listen(process.env.PORT || 8080);
console.log('Woot, server started');
