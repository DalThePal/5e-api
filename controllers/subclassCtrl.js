const db = require('../firebase');


module.exports = {

    getAllSubclasses: (req, res) => {
        let data = [];

        db.collection('subclasses').get()
            .then(query => {
                query.forEach(subclass => {
                    data.push(subclass.data());
                });

                if (req.query.name) {
                    data = data.filter(subclass => {
                        return (
                            subclass.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.flavor) {
                    data = data.filter(subclass => {
                        return (
                            subclass.subclass_flavor.toUpperCase().includes(req.query.flavor.toUpperCase())
                        );
                    });
                }
                if (req.query.class) {
                    data = data.filter(subclass => {
                        return (
                            subclass.class.name.toUpperCase().includes(req.query.class.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getSubclassById: (req, res) => {
        let subclass = db.collection('subclasses').doc(req.params.id);

        subclass.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}