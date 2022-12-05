//const jwt = require('jsonwebtoken');
const mconvocatoria = require("../modelos/convocatoria");

module.exports = {
    modificar: (req, res) => {
        const body = req.body;
        mconvocatoria.modificar(body, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    borrar: (req, res) => {
        const body = req.body;
        mconvocatoria.borrar(body.id, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    agregar: (req, res) => {
        const body = req.body;
        mconvocatoria.agregar(body, (err, results) => {
            if (err) return res.status(500).send("Error en la Base de Datos");
            return res.json({
                success: 1,
                data: results
            })
        });
    },
    listar: (req, res) => {
        mconvocatoria.listar((err, results) => {
            if (err) {
                console(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    }    
}