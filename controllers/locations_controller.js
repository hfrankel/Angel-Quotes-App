const LocationModel = require('../database/models/location_model');

async function index(req, res) {
    const locations = await LocationModel.find()
        .catch(err => res.status(500).send(err));
    res.json(locations);
}

async function create(req, res) {
    const { location, date } = req.body;
    const newLocation = await LocationModel.create({ location, date })
        .catch(err => res.status(500).send(err));
    res.json(newLocation);

}

async function show(req, res) {
    const { id } = req.params;
    const location = await LocationModel.findById(id)
        .catch(err => res.status(500).send(err));
    res.json(location);
}

async function update(req, res) {
    const { id } = req.params;
    const updateLocation = await LocationModel.findByIdAndUpdate(id)
        .catch(err => res.status(500).send(err));
    res.json(updateLocation);
}

async function destroy(req, res) {
    const { id } = req.params;
    const deletedLocation = await LocationModel.findByIdAndDelete(id)
        .catch(err => res.status(500).send(err));
    res.json('Location deleted!');
}

module.exports = {
    index,
    create,
    show,
    update,
    destroy
}