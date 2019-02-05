var memers = require("../app/data/friends");

// function Memer(name, photo, scores) {
//   this.name = name;
//   this.photo = photo;
//   this.scores = scores;
// }

module.exports = function(app) {
  app.get("/api/memers", function(req, res) {
    res.json(memers);
  });

  app.post("/api/newmemer", function(req, res) {
    console.log(req.body);
  });
};
