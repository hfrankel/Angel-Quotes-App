const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb://localhost/angel_quotes_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.Promise = global.Promise;
mongoose.connection.on('error', err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));



