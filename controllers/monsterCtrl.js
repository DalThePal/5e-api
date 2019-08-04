var db = require('../firebase');

module.exports = {

    getAllMonsters: (req, res) => {

        let data = []

        db.collection('monsters').get()
            .then((query) => {
                query.forEach((monster) => {
                    data.push(monster.data());
                });

                if (req.query.name) {
                    data = data.filter(monster => {
                        return (
                            monster.name.toUpperCase().includes(req.query.name.toUpperCase())
                        )
                    });
                }
                if (req.query.size) {
                    data = data.filter(monster => {
                        return (
                            monster.size.toUpperCase().includes(req.query.size.toUpperCase())
                        )
                    });
                }
                if (req.query.type) {
                    data = data.filter(monster => {
                        return (
                            monster.type.toUpperCase().includes(req.query.type.toUpperCase())
                        )
                    });
                }
                if (req.query.alignment) {
                    data = data.filter(monster => {
                        return (
                            monster.alignment.toUpperCase().includes(req.query.alignment.toUpperCase())
                        )
                    });
                }
                res.status(200).send(data);
            });

    },

    getMonsterById: (req, res) => {

        let monster = db.collection('monsters').doc(req.params.id);

        monster.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            }); 
    }
}