var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev.js');

var app = express();
var compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/public', express.static('public'));

app.get('([a-zA-Z0-9]|/){0,}', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.get('/:file', function (req, res) {
    res.sendFile(path.resolve(__dirname + '/public/', req.param('file')));
})

app.listen(process.env.PORT || 3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://localhost:3000');
});