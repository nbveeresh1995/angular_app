var express = require(‘express’);
var app = express();
app.use(express.static(“angular_app”));
app.get(‘/’, function (req, res,next) {
 res.redirect(‘/’);
});
app.listen(process.env.PORT || 5000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});