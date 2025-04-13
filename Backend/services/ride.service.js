const rideModel = require('../models/ride.model');
const mapsService = require('./maps.service');
const crypto = require('crypto');

async function getFare(pickup, destination) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }
    const distanceTime = await mapsService.getDistanceTime(pickup, destination);

    const baseFares = {
        auto: 30,
        car: 50,
        bike: 20
    };

    const perKmRates = {
        auto: 10,
        car: 15,
        bike: 8
    };

    const perMinuteRates = {
        auto: 2,
        car: 3,
        bike: 1.5
    };

    const fare = {
        auto: baseFares.auto + ((distanceTime.distance.value / 1000) * perKmRates.auto) + ((distanceTime.duration.value / 60) * perMinuteRates.auto),
        car: baseFares.car + ((distanceTime.distance.value / 1000) * perKmRates.car) + ((distanceTime.duration.value / 60) * perMinuteRates.car),
        bike: baseFares.bike + ((distanceTime.distance.value / 1000) * perKmRates.bike) + ((distanceTime.duration.value / 60) * perMinuteRates.bike)
    };

    return fare;
}

function getOtp(num) {
    const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString()
    return otp;
}

module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);

    const ride = new rideModel({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType],
    });

    return ride
}

