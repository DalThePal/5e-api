const db = require('../firebase');

module.exports = {

    getAllClasses: (req, res) => {
        let data = [];

        db.collection('classes').get()
            .then((query) => {
                query.forEach((item) => {
                    data.push(item.data());
                });

                if (req.query.name) {
                    data = data.filter(item => {
                        return (
                            item.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getClassById: (req, res) => {
        let data = db.collection('classes').doc(req.params.id);

        data.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });  
    }
}