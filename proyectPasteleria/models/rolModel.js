const pool = require('../config/db');

class rol {
    static async findAll() {
        const result = await pool.query('SELECT * FROM rol');
        return result.rows;
    }

    static async create(data) {
        const { nombre_rol } = data; 
        const result = await pool.query('INSERT INTO rol(nombre_rol) VALUES($1) RETURNING *', [nombre_rol]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM rol WHERE id_rol = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_rol } = data;
        const result = await pool.query(
            'UPDATE rol SET nombre_rol = $1, update_at = current_timestamp WHERE id = $2 AND delete_at IS NULL RETURNING *', 
            [nombre_rol, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE rol SET delete_at = current_timestamp WHERE id = $1 RETURNING *', [id]);
        return { message: 'Role deleted successfully' };
    }
}

module.exports = rol;
