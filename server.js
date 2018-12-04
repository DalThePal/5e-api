const express = require('express');
const monsterCtrl = require('./controllers/monsterCtrl');
const spellCtrl = require('./controllers/spellCtrl');
const equipmentCtrl = require('./controllers/equipmentCtrl');
const port = 3000;
const app = express();


app.get('/api/monsters', monsterCtrl.getAllMonsters);
app.get('/api/monsters/:id', monsterCtrl.getMonsterById);

app.get('/api/spells', spellCtrl.getAllSpells);
app.get('/api/spells/:id', spellCtrl.getSpellById);

app.get('/api/equipment', equipmentCtrl.getAllEquipment);
app.get('/api/equipment/:id', equipmentCtrl.getEquipmentById);

app.listen(port, () => console.log(`listening on port: ${port}`));