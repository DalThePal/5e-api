const db = require('../firebase');

module.exports = {

    getAllProficiencies: (req, res) => {
        let data = [];

        db.collection('proficiencies').get()
            .then((query) => {
                query.forEach((proficiency) => {
                    data.push(proficiency.data());
                });
            
                if (req.query.name) {
                    data = data.filter(prof => {
                        return (
                            prof.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.type) {
                    data = data.filter(prof => {
                        return (
                            prof.type.toUpperCase().includes(req.query.type.toUpperCase())
                        );
                    });
                }
                if (req.query.class) {
                    data = data.filter(prof => {
                        for (let i = 0; i < prof.classes.length; i++) {
                            if (prof.classes[i].name.toUpperCase().includes(req.query.class.toUpperCase())) {
                                return prof;
                            }
                        }
                    });
                }
                if (req.query.race) {
                    data = data.filter(prof => {
                        for (let i = 0; i < prof.races.length; i++) {
                            if (prof.races[i].name.toUpperCase().includes(req.query.race.toUpperCase())) {
                                return prof;
                            }
                        }
                    });
                }

                res.status(200).send(data)
            });
    },

    getProficiencyById: (req, res) => {
        let proficiency = db.collection('proficiencies').doc(req.params.id);

        proficiency.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}