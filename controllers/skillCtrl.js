const skillData = require('../json/skills.json');

module.exports = {

    getAllSkills: (req, res) => {
        let data = skillData;
        if (req.query.name) {
            data = data.filter(skill => {
                return (
                    skill.name.toUpperCase().includes(req.query.name.toUpperCase())
                );
            });
        }
        res.status(200).send(data);
    },

    getSkillById: (req, res) => {
        let data = skillData.filter(item => {
            return (
                item.id == req.params.id
            );
        });
        if (data[0]) {
            res.status(200).send(data[0]);
        } else {
            res.status(404).send({});
        }    }
}