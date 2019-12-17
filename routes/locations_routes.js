const express = require('express');
const router = express.Router();
const LocationsController = require('../controllers/locations_controller');

router.get('/', LocationsController.index);

router.post('/', LocationsController.create);

router.get('/:id', LocationsController.show);

router.patch('/:id', LocationsController.update);

router.delete('/:id', LocationsController.destroy);


module.exports = router;