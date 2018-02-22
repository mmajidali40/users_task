
var express = require('express');
var router = express.Router();

var User = require('./../models/user');

router.get('/get_all_users', function(req, res, next) {
  User.
  find({
  }).
  exec(function(err, users){
    if(err)
      next(err);
    res.json(users);
  });
});

router.get('/get_by_id/:id', function(req, res, next) {
  User.
  find({
    _id: req.params.id
  }).
  exec(function(err, users){
    if(err)
      next(err);
    res.json(users);
  });
});


router.post('/add_user', function(req, res, next) {
  var u1 = new User({ 
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    bio: req.body.bio,
  });
  u1.save(function (err, user) {
    if(err)
      next(err);
    console.log(JSON.stringify(user));
    res.json({message: "user successfully added"});
  });
});

router.post('/edit_user/:id', function(req, res, next) {
  User.
  find({
    _id: req.params.id
  }).
  exec(function(err, users){
    if(err)
      next(err);
    if(users.length < 1)
      res.json({message: "no user exists with this id"});
    else{
      var user = users[0];
      user.firstName= req.body.firstName ? req.body.firstName : user.firstName;
      user.lastName= req.body.lastName ? req.body.lastName : user.lastName;
      user.email= req.body.email ? req.body.email : user.email;
      user.bio= req.body.bio ? req.body.bio : user.bio;
      
      user.save(function (err, user) {
        if(err)
          next(err);
        console.log(JSON.stringify(user));
        res.json({message: "user successfully edited"});
      });
    }
  });
});

router.delete('/delete_user/:id', function(req, res, next) {
  User.
  find({
    _id: req.params.id
  }).
  exec(function(err, users){
    if(err)
      next(err);
    if(users.length < 1)
      res.json({message: "no user exists with this id"});
    else{
      User.deleteOne({
        _id: req.params.id
      },function (err, user) {
        if(err)
          next(err);
        res.json({message: "user successfully deleted"});
      });
    }
  });
});

module.exports = router;
