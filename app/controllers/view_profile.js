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
 * @api {Post} api/view_profile Request to View Profile 
 * @apiName view profile
 * @apiGroup User
 *
 * @apiParam {ID} userid User id.
 *
 *
 * @apiSuccess {Boolean} status  Response status.
 * @apiSuccess {String} message  Response message.
  * @apiSuccess {String} result(_id,Name,Lname,Pic_path)  Response result(_id,first Name,Last name,pic path and name).
 */



//  Friends Profile

router.post("/view_profile", function(req,res){
    if(typeof req.body.userid=='undefined')
    {
      res.send({"status" : false , "message" : "userid is not given."});
        return;
    }
    var search = req.body.userid;
    if(search=="")
    {
      res.send({"status":false,"message":"userid is not given",  "result":"search bar is empty"});
    }
    else
    {
      userCollection.findOne({_id: search},{"_id":true,"Name": true, "Lname":true},function(err, result) {
      if(err)
      {
        console.log("Not found");
      }
      if (result)
      {
        var follwer=0;
        var follwing=0;
        userfollow.count({follower_id: userid }, function(err, result) 
          {
              if(err)
              {
                res.send({"status" : false , "message" : err});
              }
              else if(result)
              {
                follwer=result;
              }
          });
        userfollow.count({following_id: userid }, function(err, result) 
          {
              if(err)
              {
                res.send({"status" : false , "message" : err});
              }
              else if(result)
              {
                follwing=result;
              }
          });
        res.send({"status":true ,"message":"succussfully found", "result" : result, "total_follwer":follwer, "total_follwing":follwing});
      }
      else
      {
        res.send({"status":false,"message":"invalid userid",  "result":"invalid user name"});
      }
      });
    }
});