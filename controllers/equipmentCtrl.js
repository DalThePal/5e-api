const db = require('../firebase');

module.exports = {

    getAllEquipment: (req, res) => {
        let data = [];

        db.collection('equipment').get()
            .then((query) => {
                query.forEach((equipment) => {
                    data.push(equipment.data());
                });

                if (req.query.name) {
                    data = data.filter(equipment => {
                        return (
                            equipment.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.category) {
                    data = data.filter(equipment => {
                        return (
                            equipment.equipment_category.toUpperCase().includes(req.query.category.toUpperCase())
                        );
                    });
                }
                if (req.query.weapon_range) {
                    data = data.filter(equipment => {
                        if (equipment.weapon_range) {
                            return (
                                equipment.weapon_range.toUpperCase().includes(req.query.weapon_range.toUpperCase())
                            );
                        }
                    });
                }
                if (req.query.armor_category) {
                    data = data.filter(equipment => {
                        if (equipment.armor_category) {
                            return (
                                equipment.armor_category.toUpperCase().includes(req.query.armor_category.toUpperCase())
                            );
                        }
                    });
                }
                if (req.query.weapon_category) {
                    data = data.filter(equipment => {
                        if (equipment.weapon_category) {
                            return (
                                equipment.weapon_category.toUpperCase().includes(req.query.weapon_category.toUpperCase())
                            );
                        }
                    });
                }
                if (req.query.gear_category) {
                    data = data.filter(equipment => {
                        if (equipment.gear_category) {
                            return (
                                equipment.gear_category.toUpperCase().includes(req.query.gear_category.toUpperCase())
                            );
                        }
                    });
                }
                if (req.query.tool_category) {
                    data = data.filter(equipment => {
                        if (equipment.tool_category) {
                            return (
                                equipment.tool_category.toUpperCase().includes(req.query.tool_category.toUpperCase())
                            );
                        }
                    });
                }
                if (req.query.vehicle_category) {
                    data = data.filter(equipment => {
                        if (equipment.vehicle_category) {
                            return (
                                equipment.vehicle_category.toUpperCase().includes(req.query.vehicle_category.toUpperCase())
                            );
                        }
                    });
                }
        
                res.status(200).send(data);
            });
    },

    getEquipmentById: (req, res) => {
        let equipment = db.collection('equipment').doc(req.params.id);

        equipment.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}