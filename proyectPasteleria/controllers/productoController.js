const Producto = require('../models/productoModel');

class productoController {

    static async getAllproductos(req, res) {
        try {
            const producto = await Producto.findAll();
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getproductoById(req, res) {
        const { id } = req.params;
        try {
            const producto = await Producto.findById(id);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async createproducto(req, res) {
        try {
            const producto = await Producto.create(req.body);
            res.status(201).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateproducto(req, res) {
        const { id } = req.params;
        try {
            const producto = await Producto.update(id, req.body);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json(producto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }


    static async deleteproducto(req, res) {
        const { id } = req.params;
        try {
            const producto = await Producto.delete(id);
            if (!producto) {
                return res.status(404).json({ message: 'Producto no encontrado' });
            }
            res.status(200).json({ message: 'Producto eliminado correctamente', empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = productoController;
