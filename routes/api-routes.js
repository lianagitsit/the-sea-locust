require("dotenv").config();
var db = require("../models");

var AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// Remember to set a default IAM; 
// the SDK looks for the default credentials and if none are set it breaks
var credentials = new AWS.SharedIniFileCredentials({profile: 'liana'});
AWS.config.credentials = credentials;

module.exports = (app) => {
    app.post("/api/students", (req, res) => {
      db.Student.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        onTLS: req.body.onTLS,
        referralSource: req.body.referralSource,
        school: req.body.school,
        firstExam: req.body.firstExam
      }).then(dbStudent => {
          res.json(dbStudent);
      })
    });

    app.get("/api/all", (req, res) => {
      db.Student.findAll().then( dbStudent => {
        res.json(dbStudent);
      });
    });

    app.post("/api/email", (req, res) => {
      var params = require("../ses")(req.body);
      console.log("POSTED TO API")
      // console.log(params);

      var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

      sendPromise.then(
        function(result) {
          console.log(result.MessageId);
          res.json(result);
        }).catch(
          function(err) {
          console.error(err, err.stack);
        });
    });

    app.delete("/api/students/:id", (req, res) => {
      db.Student.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(function(dbStudent) {
          res.json(dbStudent);
        });
    });
}