const HouseController = require('../controllers/house.controller');
module.exports = (app) => {
    //show all houses page
    app.get('/api/houses', HouseController.getAllHouses);
    //form
    app.get('/api/houses/new', HouseController.getAllHouses);
    app.post('/api/houses/new', HouseController.createHouse);
    //show one house by id
    app.get('/api/houses/:id', HouseController.getHouse);
    //Update route
    app.put('/api/houses/:id', HouseController.updateHouse);
    //delete route
    app.delete('/api/houses/:id', HouseController.deleteHouse);
    //Contact page
    app.get('api/houses/contact/:id', HouseController.getHouse);
    //
}
