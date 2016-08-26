  var express = require('express'),
  router = express.Router(),
   mongoose = require('mongoose'),
  userCollection = mongoose.model('users'),
  userPosts = mongoose.model('posts'),
  userfollow = mongoose.model('follows');

var user_id=0;
var userid=0;
module.exports = function (app) {
  app.use('/api', router);
};


/**
 * @api {Post} api/newsfeed Request to News Feed
 * @apiName News feed 
 * @apiGroup User_POST
 *
 * @apiParam {ID} userid login User ID.
 *
 *
  * @apiSuccess {Boolean} status  Response status.
  * @apiSuccess {String} message  Response message.
  * @apiSuccess {String} result(user_id,post,time)  Response result(user id,post ,time).
 */



router.post("/newsfeed",function(req,res){
    userid = req.body.userid;
    if(typeof req.body.userid == 'undefined')
    {
      res.send({"status":false, "message":"user id is not given", "result":"user id is not given"}); 
      return;
    }
    else if(userid=="")
    {
      res.send({"status":false,"result":"user id is not given"}); 
      return;   
    }
    var arr=[];
    var postarr=[];
    var i = 0;
    userfollow.find({following_id: userid },{"follower_id": true }, function(err, result) 
      {
          if(err)
          {
            res.send({"status" : false , "result" : err});
          }
          else if(result)
          {
             for (; i < Object.keys(result).length; i++) {
               arr[i]=result[i].follower_id;
             }
          }
          arr[i]=userid;
    var data=[];
    var k=0;      
      userPosts.find({user_id: { $in : arr } },{},{sort: {time: -1 }}, function(err, result) {
          if(err)
          {
            res.send({"status":false,"message":"Error",  "result":err});
          }
          if (result)
          {
             res.send(result);
          }
        });  
});
  });