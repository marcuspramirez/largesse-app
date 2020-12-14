// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcomePage.html"));
  });

  app.get("/createAccount", function(req, res) {
    // If the user already has an account send them to the homePage page
    if (req.user) {
      res.redirect("/homePage");
    }
    res.sendFile(path.join(__dirname, "../public/createAccount.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the homePage page
    if (req.user) {
      res.redirect("/homePage");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/homePage", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homePage.html"));
  });

  app.get("/charity", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charity.html"));
  });

  app.get("/tuitionReinbursement", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tuitionReinbursement.html"));
  });

  app.get("/peerFunding", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/peerFunding.html"));
  });

  app.get("/welcome", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/welcomePage.html"));
  });
};
