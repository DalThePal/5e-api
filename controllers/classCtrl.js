const classData = require('../json/classes.json');

module.exports = {

    getAllClasses: (req, res) => {
        let data = classData;
        if (req.query.name) {
            data = data.filter(item => {
                return (
                    item.name.toUpperCase().includes(req.query.name.toUpperCase())
                );
            });
        }
        res.status(200).send(data);
    },

    getClassById: (req, res) => {
        let data = classData.filter(item => {
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