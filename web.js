var express = require('express');
var app = express();
app.use(express.logger());
var content;
fs.readFileSync('./index.html', function read(err, data) {
    if (err) {
	throw err;
    }
    content = data;

    console.log(content);
    processFile();
});

function processFile() {
    console.log(content);
}

app.get('/', function(request, response) {
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
