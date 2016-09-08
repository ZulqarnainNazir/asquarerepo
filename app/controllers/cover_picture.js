var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  userCollection = mongoose.model('users');

var multer  = require('multer');
var upload = multer({ dest: 'public/uploads/' });
 
 
module.exports = function (app) {
  app.use('/api', router);
};

var i = (Math.random() * 1000000) >>> 0;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null,i+"_"+file.originalname)
  }
});
 
var upload = multer({ storage: storage });

/**
 * @api {Post} api/cover_picture Request to Set Profile Cover
 * @apiName Set cover picture
 * @apiGroup User
 *
 * @apiParam {ID} userid User login id.
 * @apiParam {File} picture User Profile picture.
 *
 *
 * @apiSuccess {Boolean} status True/false.
 * @apiSuccess {String} message  Response message.
 */


router.post("/cover_picture",upload.single('picture'), function(req,res){
    if(typeof req.body.userid=='undefined')
    {
      res.send({"status" : false , "message" : "userid is undefined."});
        return;
    }
    else if(typeof req.file=='undefined')
    {
      res.send({"status" : false , "message" : "picture is undefined."});
        return;
    }
    var userid= req.body.userid;
    var file= req.file;
    var name;
    var path;
    if(userid=="")
    {
        res.send({"status" : false , "message" : "userid is not given."});
        return;
    }
    else if(req.file=="")
    {
        res.send({"status" : false , "message" : " profile pic not given."});
        return;
    }

    var path = file.path;
        userCollection.findByIdAndUpdate(userid, { $set: { cover_picture_url: i+"_"+path}}, function (err, tank) {
          if (err) 
            {res.send({"status":false, "message" : "not successfully updated"});}
          else
             res.send({"status" : true, "message" : "Successfully updated profile picture"});
        });
      });
