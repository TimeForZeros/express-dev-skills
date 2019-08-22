var skillsArr = ['html', 'css', 'javascript', 'nodejs'];


module.exports = {
    getAll,
    getOne,
    update,
    create
}

function create(skill) {
    skillsArr.push(skill);
}

function update(skill) {
    skillsArr.push(skill);
}

function getOne() {
    return skillsArr[id];
}

function getAll() {
    return skillsArr;
}