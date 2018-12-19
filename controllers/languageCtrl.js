const languageData = require('../json/languages.json');

module.exports = {
    
    getAllLanguages: (req, res) => {
        let data = languageData;
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
    },

    getLanguageById: (req, res) => {
        let data = languageData.filter(item => {
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