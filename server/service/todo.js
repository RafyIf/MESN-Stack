const config= require('../config/mysql')
const mysql = require('mysql');

module.exports = {
    index: async function (req, res) {
        const conn = mysql.createConnection(config);
        try {
            conn.connect(err => {
                if (err) res.status(404).send(err);
            })
            await conn.query('SELECT * FROM todo', (err, rows) => {
                conn.end();
                if (err) throw err;
                res.send(rows);
            })
        } catch (error) {
            res.status(404).send(error);
        }
    },

    findOne: async function (req, res) {
        const { id } = req.params;
        const conn = mysql.createConnection(config);
        try {
            conn.connect(err => {
                if (err) res.status(404).send(err);
            })
            await conn.query('SELECT * FROM todo WHERE id = ?', [id], (err, rows) => {
                conn.end();
                if (err) throw err;
                res.send(rows);
            })
        } catch (error) {
            res.status(404).send(error);
        }
    },

    store: async function (req, res) {
        const { judul, keterangan } = req.body; // req body
        let object = { judul, keterangan } // object database table todo
        const conn = mysql.createConnection(config);
        try {
            conn.connect(err => {
                if (err) res.status(404).send(err);
            })
            await conn.query('INSERT INTO todo SET ?', [object], (err, rows) => {
                conn.end();
                if (err) throw err;
                res.send(rows);
            })
        } catch (error) {
            res.status(404).send(error);
        }
    },

    update: async function (req, res) {
        const { id } = req.params;
        const { judul, keterangan } = req.body; // req body
        let object = { judul, keterangan } // object database table todo
        const conn = mysql.createConnection(config);
        try {
            conn.connect(err => {
                if (err) res.status(404).send(err);
            })
            await conn.query('UPDATE todo SET ? WHERE id = ?', [object, id], (err, rows) => {
                conn.end();
                if (err) throw err;
                res.send(rows);
            })
        } catch (error) {
            res.status(404).send(error);
        }
    },

    destroy: async function (req, res) {
        const { id } = req.params;
        const conn = mysql.createConnection(config);
        try {
            conn.connect(err => {
                if (err) res.status(404).send(err);
            })
            await conn.query('DELETE FROM todo WHERE id = ?', [id], (err, rows) => {
                conn.end();
                if (err) throw err;
                res.send(rows);
            })
        } catch (error) {
            res.status(404).send(error);
        }
    }
}