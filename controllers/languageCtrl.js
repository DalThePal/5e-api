const db = require('../firebase');

module.exports = {
    
    getAllLanguages: (req, res) => {
        let data = [];

        db.collection('languages').get()
            .then((query) => {
                query.forEach((language) => {
                    data.push(language.data());
                });

                if (req.query.name) {
                    data = data.filter(language => {
                        return (
                            language.name.toUpperCase().includes(req.query.name.toUpperCase())
                        );
                    });
                }
                if (req.query.type) {
                    data = data.filter(language => {
                        return (
                            language.type.toUpperCase().includes(req.query.type.toUpperCase())
                        );
                    });
                }
                if (req.query.typical_speakers) {
                    data = data.filter(language => {
                        for (let i = 0; i < language.typical_speakers.length; i++) {
                            if (language.typical_speakers[i].toUpperCase().includes(req.query.typical_speakers.toUpperCase())) {
                                return language;
                            }
                        }
                    });
                }
                if (req.query.script) {
                    data = data.filter(language => {
                        return (
                            language.script.toUpperCase().includes(req.query.script.toUpperCase())
                        );
                    });
                }

                res.status(200).send(data);
            });
    },

    getLanguageById: (req, res) => {
        let language = db.collection('languages').doc(req.params.id);

        language.get()
            .then(doc => {

                if (doc.exists) {
                    res.status(200).send(doc.data());
                } else {
                    res.status(404).send({});
                }
            });
    }
}