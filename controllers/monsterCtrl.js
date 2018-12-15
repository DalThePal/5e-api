const monsterData = require('../json/monsters.json');

module.exports = {

    getAllMonsters: (req, res) => {
        let data = monsterData;
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
    },

    getMonsterById: (req, res) => {
        let data = monsterData.filter(item => {
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