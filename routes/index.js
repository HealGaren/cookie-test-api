var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/api/environments', function(req, res, next) {

  const domain = req.query.domain;

  res.cookie('test-cookie', 'monster', {
    secure: true,
    httpOnly: true,
    domain
  });
  res.json({
    message: 'ok'
  });
});


module.exports = router;
