define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__Users_Naini_Documents_GitHub_asquare_apidoc_main_js",
    "groupTitle": "C__Users_Naini_Documents_GitHub_asquare_apidoc_main_js",
    "name": ""
  },
  {
    "type": "Post",
    "url": "api/suggestions",
    "title": "Request to Default follows",
    "name": "Default_Follow_User",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>login user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(_id,Name)  Response result(default user id,first Name).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "Follow"
  },
  {
    "type": "Post",
    "url": "api/follow_friend",
    "title": "Request to Follow a friend",
    "name": "Follow_a_friend",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>login User Id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "friend_id",
            "description": "<p>friend User Id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "stauts",
            "description": "<p>Response stauts.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response succussfully follow.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "follower_id",
            "description": "<p>Response follower_id.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "following_id",
            "description": "<p>Response following_id.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "Follow"
  },
  {
    "type": "Post",
    "url": "api/see_follower",
    "title": "Request to See followers",
    "name": "See_follower",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>login user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(follower_id)  Response result(follower_id).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "Follow"
  },
  {
    "type": "Post",
    "url": "api/see_following",
    "title": "Request to See Followings",
    "name": "See_following",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>login user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(following_id)  Response result(following_id).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "Follow"
  },
  {
    "type": "Post",
    "url": "api/register",
    "title": "Request to register User",
    "name": "Create",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>Response ID of created user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/signup.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "api/login",
    "title": "Request to login User",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>Response ID of login user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "api/search",
    "title": "Request to seacrh friends",
    "name": "Search_friend",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "search",
            "description": "<p>User Name of friend.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>Login user id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status of result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(_id,Name,Lname)  Response result(_id,first Name,Last name).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "api/setprofile",
    "title": "Request to Set User Profile",
    "name": "Set_profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>User login id.</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "picture",
            "description": "<p>User Profile picture.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/setprofile.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "api/update_profile",
    "title": "Request to update profile",
    "name": "Update_Profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>Login user id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "first_name",
            "description": "<p>User First Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "last_name",
            "description": "<p>User Last Name.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status of result.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/update profile.js",
    "groupTitle": "User"
  },
  {
    "type": "Post",
    "url": "api/likepost",
    "title": "Request to like a user post",
    "name": "Like_post",
    "group": "User_POST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "post_id",
            "description": "<p>User Post id.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>User Who like post.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/likepost.js",
    "groupTitle": "User_POST"
  },
  {
    "type": "Post",
    "url": "api/newsfeed",
    "title": "Request to News Feed",
    "name": "News_feed",
    "group": "User_POST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>login User ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(user_id,post,time)  Response result(user id,post ,time).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "User_POST"
  },
  {
    "type": "Post",
    "url": "api/post",
    "title": "Request to Add Post",
    "name": "Post",
    "group": "User_POST",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "post",
            "description": "<p>User Post.</p>"
          },
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>User Id .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>True/false.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>Response ID of login user.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "User_POST"
  },
  {
    "type": "Post",
    "url": "api/view_profile",
    "title": "Request to View Profile",
    "name": "view_profile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ID",
            "optional": false,
            "field": "userid",
            "description": "<p>User id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Response status.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Response message.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>(_id,Name,Lname)  Response result(_id,first Name,Last name).</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./app/controllers/login.js",
    "groupTitle": "User"
  }
] });
