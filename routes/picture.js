
var express = require('express');
var router = express.Router();

var Picture = require('./../models/picture');
var User = require('./../models/user');

router.get('/get_user_pictures/:id', function(req, res, next) {
  Picture.
  find({
    userId: req.params.id
  }).
  exec(function(err, pictures){
    if(err)
      next(err);
    res.json(pictures);
  });
});


router.get('/get_all_pictures', function(req, res, next) {
  Picture.
  find({
  }).
  exec(function(err, pictures){
    if(err)
      next(err);
    res.json(pictures);
  });
});

router.get('/get_by_id/:id', function(req, res, next) {
  Picture.
  find({
    _id: req.params.id
  }).
  exec(function(err, pictures){
    if(err)
      next(err);
    res.json(pictures);
  });
});


router.post('/add_picture', function(req, res, next) {

  if(req.body.userId == null) {
    return res.json({message: "user id is required"});
  }
  User.
  find({
    _id: req.body.userId
  }).
  exec(function(err, users){
    if(err)
      next(err);
    if(users.length < 1)
      res.json({message: "no user exists with this id"});
    else{
      var p1 = new Picture({ 
        name: req.body.name,
        type: req.body.type,
        url: req.body.url,
        userId: req.body.userId,
        date: new Date()
      });
      p1.save(function (err, picture) {
        if(err)
          return next(err);
        console.log(JSON.stringify(picture));
        res.json({message: "picture successfully added"});
      });
    }
  });
});

router.post('/edit_picture/:id', function(req, res, next) {
  Picture.
  find({
    _id: req.params.id
  }).
  exec(function(err, pictures){
    if(err)
      next(err);
    if(pictures.length < 1)
      res.json({message: "no picture exists with this id"});
    else{
      var picture = pictures[0];
      picture.name= req.body.name ? req.body.name : picture.firstName;
      picture.type= req.body.type ? req.body.type : picture.type;
      picture.email= req.body.url ? req.body.url : picture.url;
      
      picture.save(function (err, picture) {
        if(err)
          next(err);
        console.log(JSON.stringify(picture));
        res.json({message: "picture successfully edited"});
      });
    }
  });
});

router.delete('/delete_picture/:id', function(req, res, next) {
  Picture.
  find({
    _id: req.params.id
  }).
  exec(function(err, pictures){
    if(err)
      next(err);
    if(pictures.length < 1)
      res.json({message: "no picture exists with this id"});
    else{
      Picture.deleteOne({
        _id: req.params.id
      },function (err, picture) {
        if(err)
          next(err);
        res.json({message: "picture successfully deleted"});
      });
    }
  });
});

module.exports = router;
