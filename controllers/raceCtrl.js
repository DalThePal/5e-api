const raceData = require('../json/races.json');

module.exports = {

    getAllRaces: (req, res) => {
        let data = raceData;
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
    },

    getRaceById: (req, res) => {
        let data = raceData.filter(item => {
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