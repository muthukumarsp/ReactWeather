var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;


app.use(function (req, res, next) {
    if (req.header['x-forward-proto'] === 'https') {
        // console.log(req);
        // console.log(res);
        res.redirect('http://' + req.hostname + req.url);
        // next();
    } else {
        // console.log(req);
        // console.log(res);
        //
        next();
    }
});
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
