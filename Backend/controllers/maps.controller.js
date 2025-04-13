const mapsService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const coordinates = await mapsService.getAddressCoordinate(req.query);
        return res.status(200).json(coordinates);
    } catch (error) {
        next(error);
    }
}

module.exports.getDistanceTime = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const { origin, destination } = req.query;
        const distanceTime = await mapsService.getDistanceTime(origin, destination);
        return res.status(200).json(distanceTime);
    } catch (error) {
        next(error);
    }
}

module.exports.getSuggestions = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const suggestions = await mapsService.getAddressSuggestions(req.query.address);
        return res.status(200).json(suggestions);
    } catch (error) {
        next(error);
    }
}