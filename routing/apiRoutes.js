var memers = require("../app/data/memers");

module.exports = function(app) {
  app.get("/api/memers", function(req, res) {
    res.json(memers);
  });

  app.post("/api/newmemer", function(req, res) {
    var matchValues = [];
    for (i = 0; i < memers.length; i++) {
      var matchValue = 0;
      if (memers[i].name === req.body.name) {
        res.json("Exists");
        return;
      } else {
        for (j = 0; j < memers[i].scores.length; j++) {
          var difference = memers[i].scores[j] - req.body.scores[j];
          matchValue += Math.abs(difference);
        }
        matchValues.push(matchValue);
      }
      memers[i].match = matchValue;
    }

    var match = matchValues.indexOf(Math.min(...matchValues));
    res.json(memers[match]);
    memers.push(req.body);
  });
};
