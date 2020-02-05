var express = require('express');
var router = express.Router();
var { Article} = require('../db/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//查询文档
router.get('/article',async (req,res) => {
  const article = await Article.find()
  res.send(article)
})
//查询单个文章详情
router.get('/article/:id',async (req,res) => {
  const article = await Article.findById(req.params.id)
  res.send(article)
})
//新增文档
router.post('/article',async (req,res) => {
  const article = await Article.create(req.body)
  res.send(article)
})
//修改文档

router.put('/article/:id',async (req,res) => {
  const article = await Article.findByIdAndUpdate(req.params.id,req.body)
  res.send(article)
})

router.delete('/article/:id',async (req, res) => {
   const article = await Article.findByIdAndRemove(req.params.id)
   res.send({
     status:true
   })
});


module.exports = router;
