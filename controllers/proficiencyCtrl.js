const proficiencyData = require('../json/proficiencies.json');

module.exports = {

    getAllProficiencies: (req, res) => {
        let data = proficiencyData;
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
    },

    getProficiencyById: (req, res) => {
        let data = proficiencyData.filter(item => {
            return (
                item.id == req.params.id
            );
        });
        if (data[0]) {
            res.status(200).send(data[0]);
        } else {
            res.status(404).send({});
        }
    }
}