var memers = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/memers", function(req, res) {
    res.json(memers);
  });

  app.post("/api/newmemer", function(req, res) {
    memers.push(req.body);
    res.send(memers);
  });
};
