const
    express = require('express');

var app = express();

app.use(express.static(__dirname+'/client/dist'));

app.get('*', function(req, res) {
    res.sendFile(__dirname+'/client/dist/index.html');
});

app.listen(8000, function(){
    console.log('Running on port 8000');
});