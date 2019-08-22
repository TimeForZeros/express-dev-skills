var Skill = require("../models/skill");

module.exports = {
  index,
  all,
  update,
  newSkill,
  create
};

function create(req, res) {
  res.redirect('/skills');
   Skill.create(req.body.skill);
    
  }

function newSkill(req, res) {
    res.render('skills/new');
  }

function update(req, res){
    console.log(req.body);
    Skill.update(req.params.id, req.body);
    res.redirect('/skills');
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getOne(),
    //time: req.time
  });
}


//check on this one
function all(req, res) {
    res.render("skills/index",{skills: Skill.getAll()} );
}
