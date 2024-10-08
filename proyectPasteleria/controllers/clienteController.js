
const Cliente = require('../models/clienteModel');

class ClienteController {
    // Obtener todos los empleados
    static async getAllcliente(req, res) {
        try {
            const cliente = await Cliente.findAll();
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un empleado por ID
    static async getclienteById(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.findById(id);
            if (!cliente) {
                return res.status(404).json({ message: 'cliente no encontrado' });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo empleado
    static async createcliente(req, res) {
        try {
            const cliente = await Cliente.create(req.body);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un empleado por ID
    static async updatecliente(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.update(id, req.body);
            if (!cliente) {
                return res.status(404).json({ message: 'cliente no encontrado' });
            }
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un empleado por ID (soft delete)
    static async deletecliente(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente.delete(id);
            if (!cliente) {
                return res.status(404).json({ message: 'cliente no encontrado' });
            }
            res.status(200).json({ message: 'cliente eliminado correctamente', empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ClienteController;
