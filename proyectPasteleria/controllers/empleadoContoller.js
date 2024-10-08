const { Result } = require('express-validator');
const Empleado = require('../models/empleadoModel');

class EmpleadoController {
    // Obtener todos los empleados
    static async getAllEmpleados(req, res) {
        try {
            const empleados = await Empleado.findAll();
            res.status(200).json(empleados);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Obtener un empleado por ID
    static async getEmpleadoById(req, res) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.findById(id);
            if (!empleado) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Crear un nuevo empleado
    static async createEmpleado(req, res) {
        try {
            const empleado = await Empleado.create(req.body);
            res.status(201).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Actualizar un empleado por ID
    static async updateEmpleado(req, res) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.update(id, req.body);
            if (!empleado) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json(empleado);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Eliminar un empleado por ID (soft delete)
    static async deleteEmpleado(req, res) {
        const { id } = req.params;
        try {
            const empleado = await Empleado.delete(id);
            if (!empleado) {
                return res.status(404).json({ message: 'Empleado no encontrado' });
            }
            res.status(200).json({ message: 'Empleado eliminado correctamente', empleado });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = EmpleadoController;
