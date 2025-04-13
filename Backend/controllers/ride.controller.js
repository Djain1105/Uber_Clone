const { validationresults } = require('express-validator');

const rideService = require('../services/ride.service');

module.exports.createRide = async (req, res) => {
    const errors = validationresults(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType
        });
        return res.status(201).json({ ride });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}