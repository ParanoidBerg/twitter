const mongoose = require("mongoose");
const express = require('express');
const { request } = require("http");
const app = express()
const port = 3000


app.use(express.json());
app.use(require('./routes/comment.route'))
app.use(require('./routes/twit.route'))
app.use(require('./routes/user.route'))



mongoose.connect("mongodb+srv://Deni:2479@cluster0.elkeumb.mongodb.net/Twitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))


app.listen(port, () => {
    console.log(`Сервер успешно запущен http://localhost:${port}`)
})