const db = require("../models");



// Defining methods for the ingredientsController
module.exports = {
  
  findShoppingList: function(req, res) {
    db.User
      .find({ "local.username": req.params.username }, { _id: 0, 'local.username': 0, 'local.password':0,'local.email': 0,__v:0 })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.savedArticle
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    //console.log(req.body);
    db.User
      .findOneAndUpdate({ "local.username": req.params.username },{
     $push: {
        "local.shoppinglist": {
           $each: req.body,
           $position: 0
        }
     }
   })
      .then(dbModel => console.log("database updated with shopping list"))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    db.savedArticle
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findEmail: function (req,res){
    //console.log(req.body);
    db.User
      .findOne({ "local.username": req.params.username },{_id: 0, 'local.username': 0, 'local.password':0,'local.shoppinglist': 0,__v:0  })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

  }
};
