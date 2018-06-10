var express = require('express');
var multer = require('multer');

var app = express();
var upload = multer();

app.use(express.static('static'));

app.post('/file', upload.single('file'), function(request, response, next) {
  response.send({ size: request.file.size });
});

app.listen(process.env.PORT);
