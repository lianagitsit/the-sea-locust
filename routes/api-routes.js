require("dotenv").config();
var db = require("../models");

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
    })
}