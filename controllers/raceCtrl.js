const db = require('../firebase');


module.exports = {

    getAllRaces: (req, res) => {
        let data = [];

        db.collection('races').get()
            .then(query => {
                query.forEach(race => {
                    data.push(race.data());
                });

                if (req.query.name) {
                    data = data.filter(race => {
                        return (
                            race.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.size) {
                    data = data.filter(race => {
                        return (
                            race.size.toUpperCase().includes(req.query.size.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getRaceById: (req, res) => {
        let race = db.collection('races').doc(req.params.id);

        race.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}