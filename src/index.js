require('dotenv').config();

const express = require('express');
const multer = require('multer');

let app = express();
let upload = multer();

app.use(express.static('static'));

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res
    .send({
      name: req.file.originalname,
      type: req.file.mimetype,
      size: req.file.size
    })
    .end();
});

app.listen(process.env.PORT);
