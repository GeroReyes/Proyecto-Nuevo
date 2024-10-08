const pool = require('../config/db');

class usuario {
    static async findAll() {
        const result = await pool.query('SELECT * FROM usuario');
        return result.rows;
    }

    static async create(data) {
        const { nombre_usuario, contraseña, correo_electronico, rolId } = data; 
        const result = await pool.query('INSERT INTO usuario(nombre_usuario, contraseña, correo_electronico, rol_id) VALUES($1, $2, $3, $4) RETURNING *', 
            [nombre_usuario, contraseña, correo_electronico, rolId]);
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM usuario WHERE id_puesto = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_usuario, contraseña, correo_electronico } = data;
        const result = await pool.query(
            'UPDATE usuario SET  nombre_usuario = $1, contraseña = $2, correo_electronico = $3, update_at = current_timestamp WHERE id = $4 AND delete_at IS NULL RETURNING *', 
            [nombre_usuario, contraseña, correo_electronico, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE usuario SET delete_at = current_timestamp WHERE id = $1 RETURNING *', [id]);
        return { message: 'puesto deleted successfully' };
    }
}

module.exports = usuario;
