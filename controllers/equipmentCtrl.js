const equipmentData = require('../json/equipment.json');

module.exports = {
    
    getAllEquipment: (req, res) => {
        let data = equipmentData;
        if (req.query.name) {
            data = data.filter(equipment => {
                return (
                    equipment.name.toUpperCase().includes(req.query.name.toUpperCase())
                );
            });
        }
        res.status(200).send(data);
    },

    getEquipmentById: (req, res) => {

    }
}