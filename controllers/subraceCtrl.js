const db = require('../firebase');

module.exports = {

    getAllSubraces: (req, res) => {
        let data = [];

        db.collection('subraces').get()
            .then(query => {
                query.forEach(subrace => {
                    data.push(subrace.data());
                });

                if (req.query.name) {
                    data = data.filter(subrace => {
                        return (
                            subrace.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.race) {
                    data = data.filter(subrace => {
                        return (
                            subrace.race.name.toUpperCase().includes(req.query.race.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getSubraceById: (req, res) => {
        let subrace = db.collection('subraces').doc(req.params.id);
        
        subrace.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}