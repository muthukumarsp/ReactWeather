const express = require('express');

// Create our app
let app = express();
const PORT = process.env.PORT || 3000;


app.use(function (req, res, next) {
    if (req.header['x-forward-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log('Express server is up on port ' + PORT);
});
