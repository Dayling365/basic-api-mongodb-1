const {Router}= require('express');
const { getCajeros, getCajerosById, canew_bulk, createCajero, createCajeros, updateCajeros, deleteCajeros } = require('../controllers/cajeros.controller');

const router = Router();

router.get('/cajeros/:id', getCajerosById);
router.get('/cajeros', getCajeros);
router.post('/cajeros', createCajero);
router.post('/cajeros/bulk', createCajeros);
router.put('/cajeros/:id', updateCajeros);
router.delete('/cajeros/:id', deleteCajeros);
router.get('/canew_bulk', canew_bulk);
module.exports= router;