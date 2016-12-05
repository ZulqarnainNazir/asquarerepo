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
 * @api {Post} api/search Request to seacrh friends 
 * @apiName Search friend 
 * @apiGroup User
 *
 * @apiParam {String} search User Name of friend.
 * @apiParam {ID} userid Login user id.
 *
 *
 * @apiSuccess {Boolean} status  Response status of result.
  * @apiSuccess {String} message  Response message.
  * @apiSuccess {String} result(_id,Name,Lname)  Response result(_id,first Name,Last name).
 */

var user1;

router.post("/search",function(req,res){
    if(typeof req.body.userid=='undefined')
    {
      res.send({"status" : false , "message" : "userid is not given."});
        return;
    }
    else if(typeof req.body.search=='undefined')
    {
      res.send({"status" : false , "message" : "search name is not given."});
        return;
    }

    var data = req.body.search;
    var userid = req.body.userid;
    var resultFound;
    var arr=[];
    
    if(seacrh=="")
    {
      res.send({"status" : false , "message" : "field empty"});
        return;
    }

    userCollection.find({first_name: new RegExp(data, "i"), _id: {'$ne':userid }},function(err, doc) {
      if(doc)
        {
          for (var i = 0; i < Object(doc).length; i++) {
              for (var j = 0; j < Object(doc[i].follower).length; j++) {
                console.log(doc[i].follower[j].following_id);
                if(doc[i].follower[j].following_id==userid)
                {
                  doc[i].isfollow = true;
                }
              }
              arr.push({"_id":doc[i]._id,"first_name":doc[i].first_name,"last_name":doc[i].last_name,"profile_picture_url":doc[i].profile_picture_url,"isfollow":doc[i].isfollow});
          }
            res.send({"status":true ,"message":"found", "result":arr});
        }
      else
        res.send({"status":false ,"message":"no result found", "result":doc});
});
});
