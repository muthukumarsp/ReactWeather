var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;


app.use(function (req, res, next) {
    if (req.header['x-forward-proto'] === 'http') {
        // console.log(req);
        // console.log(res);
        next();
    } else {
        // console.log(req);
        // console.log(res);
        res.redirect('http://' + req.hostname + req.url);
        // next();
    }
});
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
