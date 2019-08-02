var db = require('../firebase');

module.exports = {

    getAllSpells: (req, res) => {
        let data = [];

        db.collection('spells').get()
            .then((query) => {
                query.forEach((spell) => {
                    data.push(spell.data());
                });

                if (req.query.name) {
                    data = data.filter(spell => {
                        return (
                            spell.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.level) {
                    data = data.filter(spell => {
                        return (
                            spell.level == req.query.level
                        );
                    });
                }
                if (req.query.school) {
                    data = data.filter(spell => {
                        return (
                            spell.school.name.toUpperCase().includes(req.query.school.toUpperCase())
                        );
                    });
                }
                if (req.query.classes) {
                    data = data.filter(spell => {
                        for (let i = 0; i < spell.classes.length; i++) {
                            if (spell.classes[i].name.toUpperCase().includes(req.query.classes.toUpperCase())) {
                                return (spell);
                            }
                        }
                    });
                }
                if (req.query.subclasses) {
                    data = data.filter(spell => {
                        for (let i = 0; i < spell.subclasses.length; i++) {
                            if (spell.subclasses[i].name.toUpperCase().includes(req.query.subclasses.toUpperCase())) {
                                return (spell);
                            }
                        }
                    });
                }

                res.status(200).send(data);
            });
    },

    getSpellById: (req, res) => {
        let data = [];

        db.collection('spells').get()
            .then((query) => {
                query.forEach((spell) => {
                    if (req.params.id == spell.data().id) {
                        data.push(spell.data());
                    }
                });

                if (data[0]) {
                    res.status(200).send(data[0]);
                } else {
                    res.status(404).send({});
                }
            });
    }
}