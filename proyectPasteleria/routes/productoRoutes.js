const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();

router.get('/productos', productoController.getAllproductos);

router.get('/productos/:id', productoController.getproductoById);

router.post('/productos', productoController.createproducto);

router.put('/productos/:id', productoController.updateproducto);

router.delete('/productos/:id', productoController.deleteproducto);

module.exports = router;
