const axios = require('axios');



module.exports.getAddressCoordinate = async (address) => {
    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API;

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
            params: {
                address: address,
                key: GOOGLE_MAPS_API_KEY
            }
        });

        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error(`Geocoding error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API;

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/distancematrix/json', {
            params: {
                origins: origin,
                destinations: destination,
                key: GOOGLE_MAPS_API_KEY
            }
        });

        if (response.data.status === 'OK') {
            const element = response.data.rows[0].elements[0];

            if (element.status === 'ZERO_RESULTS') {
                throw new Error('No route found between the specified locations');
            }

            return {
                distance: element.distance,
                duration: element.duration
            };
        } else {
            throw new Error(`Distance Matrix error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching distance and time:', error.message);
        throw error;
    }
}

module.exports.getAddressSuggestions = async (address) => {

    if (!address) {
        throw new Error('Address is required for suggestions');
    }

    const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API;

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json', {
            params: {
                input: address,
                key: GOOGLE_MAPS_API_KEY
            }
        });

        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => prediction.description);
        } else {
            throw new Error(`Autocomplete error: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching address suggestions:', error.message);
        throw error;
    }
}