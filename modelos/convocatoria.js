const coneccion = require('../basedatos');
module.exports ={
    listar:(callBack) =>{
        coneccion.query(
            'select * from convocatorias',
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    }
}