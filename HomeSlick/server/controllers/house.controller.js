const House = require('../models/house.model'); 
module.exports.index = (request, response) => {
    response.json({
        message: "Connection Established"
    });
}

module.exports.createHouse = (request, response) => {
    House.create(request.body) //This will use whatever the body of the client's request sends over
        .then(newHouse => response.json(newHouse))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllHouses = (request, response) => {
    //get all method using house.find
    House.find({})
        .then(allHouses => {
            console.log(allHouses); //for troubleshooting
            response.json(allHouses);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getHouse = (request, response) => {
    //get one house using house.findOne
    House.findOne({ _id: request.params.id })
        .then((oneHouse) => response.json(oneHouse))
        .catch(err => response.json(err))
}

module.exports.updateHouse = (request, response) => {
    //update house
    House.findOneAndUpdate({_id: request.params.id}, request.body, {runValidators: true})
        .then(updatedHouse => response.json(updatedHouse))
        .catch(err => response.json(err))
}

module.exports.deleteHouse = (request, response) => {
    //DELETE a house
    House.deleteOne({ _id: request.params.id }) //note: "id" here MUST match id in corresponding route
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}