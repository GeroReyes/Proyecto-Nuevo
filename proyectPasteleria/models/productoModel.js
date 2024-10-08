const pool = require('../config/db');

class Producto {
    static async findAll() {
        const result = await pool.query('SELECT * FROM producto WHERE delete_at IS NULL');
        return result.rows;
    }

    static async create(data) {
        const {nombre_producto, imagen_url, descripcion_producto, precio, stock, categoria_id } = data;
        const result = await pool.query(
            'INSERT INTO producto(nombre_producto, imagen_url, descripcion_producto, precio, stock, categoria_id) VALUES($1, $2, $3, $4, $5, $6) RETURNING *', 
            [nombre_producto, imagen_url, descripcion_producto, precio, stock, categoria_id]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM producto WHERE id_producto = $1 AND delete_at IS NULL', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { nombre_producto, imagen_url, descripcion_producto, precio, stock, categoria_id } = data;
        const result = await pool.query(
            'UPDATE producto SET nombre_producto = $1, imagen_url = $2, descripcion_producto = $3, precio = $4, stock = $5, categoria_id = $6, update_at = current_timestamp WHERE id_producto = $9 AND delete_at IS NULL RETURNING *', 
            [nombre_producto, imagen_url, descripcion_producto, precio, stock, categoria_id, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('UPDATE producto SET delete_at = current_timestamp WHERE id_producto = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = Producto;
