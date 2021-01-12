// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })
  // Called when "Countinue Workout" or "new Workout" is clicked in index.html and user sends info.
  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Called when the user clicks stats
  app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};