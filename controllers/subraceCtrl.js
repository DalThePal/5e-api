const subraceData = require('../json/subraces.json');

module.exports = {

    getAllSubraces: (req, res) => {
        let data = subraceData;
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
    },

    getSubraceById: (req, res) => {
        let data = subraceData.filter(item => {
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