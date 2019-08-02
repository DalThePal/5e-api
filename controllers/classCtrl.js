const db = require('../firebase');

module.exports = {

    getAllClasses: (req, res) => {
        let data = [];

        db.collection('classes').get()
            .then((query) => {
                query.forEach((class) => {
                    data.push(class.data());
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
        let data = [];

        db.collection('classes').get()
            .then((query) => {
                query.forEach((class) => {
                    if (req.params.id == class.data().id) {
                        data.push(class.data());
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