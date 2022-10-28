const coneccion = require('../basedatos');
module.exports ={
    agregar:(datos, callBack) =>{
        coneccion.query(
            'INSERT INTO postulante (nombre, ci, carrera, telf, materia, foto) values (?, ?, ?, ?, ?, ?)',
            [datos.nombre, datos.ci, datos.carrera, datos.telf, datos.materia, '---'],
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    }
}