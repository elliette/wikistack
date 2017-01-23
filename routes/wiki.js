const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page;
var User = models.User;


router.get('/', function(req, res, next) {
  res.redirect('/');
  //console.log("You've found wiki page")
 // next();
})

router.post('/', function(req, res, next) {
  console.log(req.body);

  var title = req.body.title;
  var content = req.body.content;
  var page = Page.build({
    title: title,
    content: content
  });

  page.save().then(function() {
    res.redirect('/');
  });
})

router.get('/add', function(req, res, next) {
  res.render('addpage')
})

router.get('/:title', function(req, res, next) {
      var urlTitle = req.params.title;
      console.log(urlTitle); 

      Page.findOne({
        where: {
          urlTitle: urlTitle
        }
      })
      .then(function(foundPage) {
        console.log(foundPage);
        res.render('wikipage', {
          title: title, 
          content: content, 
          status: status
        })
        }).catch(next)
      });



      module.exports = router;