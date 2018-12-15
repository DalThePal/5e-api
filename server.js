const express = require('express');
const monsterCtrl = require('./controllers/monsterCtrl');
const spellCtrl = require('./controllers/spellCtrl');
const equipmentCtrl = require('./controllers/equipmentCtrl');
const classCtrl = require('./controllers/classCtrl');
const raceCtrl = require('./controllers/raceCtrl');
const subraceCtrl = require('./controllers/subraceCtrl');
const subclassCtrl = require('./controllers/subclassCtrl');
const port = 3000;
const app = express();


app.get('/api/monsters', monsterCtrl.getAllMonsters);
app.get('/api/monsters/:id', monsterCtrl.getMonsterById);

app.get('/api/spells', spellCtrl.getAllSpells);
app.get('/api/spells/:id', spellCtrl.getSpellById);

app.get('/api/equipment', equipmentCtrl.getAllEquipment);
app.get('/api/equipment/:id', equipmentCtrl.getEquipmentById);

app.get('/api/classes', classCtrl.getAllClasses);
app.get('/api/classes/:id', classCtrl.getClassById);

app.get('/api/races', raceCtrl.getAllRaces);
app.get('/api/races/:id', raceCtrl.getRaceById);

app.get('/api/subraces', subraceCtrl.getAllSubraces);
app.get('/api/subraces/:id', subraceCtrl.getSubraceById);

app.get('/api/subclasses', subclassCtrl.getAllSubclasses);
app.get('/api/subclasses/:id', subclassCtrl.getSubclassById);

app.listen(port, () => console.log(`listening on port: ${port}`));