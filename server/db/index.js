const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/vue_admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.on('open', () => {
  console.log('数据库连接成功')
})

const Article = mongoose.model('Article', new mongoose.Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  cateGory: {
    type: String
  }
}))

module.exports = {
  Article
}