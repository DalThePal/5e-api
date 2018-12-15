const subclassData = require('../json/subclasses.json');

module.exports = {

    getAllSubclasses: (req, res) => {
        let data = subclassData;
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
    },

    getSubclassById: (req, res) => {
        let data = subclassData.filter(item => {
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