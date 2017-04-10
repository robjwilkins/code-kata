const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

app.route('/services/:name')
  .all(function (req, res, next) {
    console.log('/services request received');
    next();
  })
  .get(function (req, res, next) {
    res.status(200).json({"hello": req.params.name});
  })
  .post(function (req, res, next) {
    console.log(`body: ${JSON.stringify(req.body)}`);
    res.status(200).json({"hello": req.params.name});
  })
  .put(function (req, res, next) {
    console.log(`body: ${JSON.stringify(req.body)}`);
    res.status(200).json({"hello": req.params.name});
  }
);

app.listen(3000, function () {
  console.log("ready captain.");
})