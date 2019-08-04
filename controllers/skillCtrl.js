const db = require('../firebase');

module.exports = {

    getAllSkills: (req, res) => {
        let data = [];

        db.collection('skills').get()
            .then(query => {
                query.forEach(skill => {
                    data.push(skill.data());
                });

                if (req.query.name) {
                    data = data.filter(skill => {
                        return (
                            skill.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getSkillById: (req, res) => {
        let skill = db.collection('skills').doc(req.params.id);

        skill.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }    
            });
    }
}