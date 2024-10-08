const pool = require('../config/db');

class tipo_cliente {
    static async findAll() {
        const result = await pool.query('SELECT * FROM tipo_cliente');
        return result.rows;
    }

    static async create(data) {
        const { nombre_tipo_cliente } = data; 
        const result = await pool.query('INSERT INTO puesto(nombre_tipo_cliente) VALUES($1) RETURNING *', 
            [nombre_tipo_cliente]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM tipo_cliente WHERE  id_tipo_cliente = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_tipo_cliente } = data;
        const result = await pool.query(
            'UPDATE tipo_cliente SET  nombre_tipo_cliente = $1, update_at = current_timestamp WHERE id = $2 AND delete_at IS NULL RETURNING *', 
            [nombre_tipo_cliente, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE tipo_cliente SET delete_at = current_timestamp WHERE id = $1 RETURNING *', [id]);
        return { message: 'puesto deleted successfully' };
    }
}

module.exports = tipo_cliente;
