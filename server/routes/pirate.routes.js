const PirateController = require('../controllers/pirate.controller');

module.exports = function(app){
    app.get('/api', PirateController.index);
    app.post('/api/pirates/new', PirateController.createPirate);
    app.get('/api/pirates', PirateController.findAllPirates);
    app.get('/api/pirates/:id', PirateController.findOnePirate);
    app.put('/api/pirates/:id', PirateController.editPirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
}