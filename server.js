const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.json());

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, function(data) {
  console.log("App listening on PORT " + PORT);
});
