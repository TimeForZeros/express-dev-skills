var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', skillsCtrl.all);
router.get('/new', skillsCtrl.newSkill);
router.post('/', skillsCtrl.create);
//router.put('/:id', skillsCtrl.update);

module.exports = router;
