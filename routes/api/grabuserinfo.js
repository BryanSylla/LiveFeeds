const router = require("express").Router();
const ingredientsController = require("../../controllers/ingredientsController");
var request = require('request');
var nodemailer = require('nodemailer');

// Matches with "/api/userinfo/:username"
router
  .route("/:username")
  .get(ingredientsController.findEmail)

  router
  .route("/:useremail")
  .post( function(req,res){
  	console.log(req.params);
  	var text=JSON.stringify(req.body,null, 4);

    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'livefeeds123@gmail.com',
    pass: 'bobbyb123'
  }
});

var mailOptions = {
  from: 'livefeeds123@gmail.com',
  to: req.params.useremail,
  subject: 'Your Shopping List from Live Feeds!',
  text: text
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

  });

module.exports = router;