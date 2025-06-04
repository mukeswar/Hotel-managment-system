// external import
const express = require('express');

// internal import
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getOneHotel,
    getAllHotel,
    getHotelByCity,
    getHotelByType,
    getHotelRooms,
} = require('../controllers/hotelController');

const router = express.Router();

// create hotel
router.post('/hotel/create', createHotel);

// update hotel
router.put('/hotel/:id', updateHotel);

// delete hotel
router.delete('/hotels/:id', deleteHotel);

// get one hotel
router.get('/hotel/:id', getOneHotel);

// get all hotels
router.get('/hotels', getAllHotel);

// get hotels by city
router.get('/hotels/getHotelByCity', getHotelByCity);  // Remove the '/api' prefix

// get hotels by type
router.get('/hotels/getHotelByType', getHotelByType);

// get hotel rooms
router.get('/rooms/:id', getHotelRooms);

module.exports = router;
