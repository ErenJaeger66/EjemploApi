const coneccion = require('../basedatos');
module.exports ={
    listar:(callBack) =>{
        coneccion.query(
            'select * from usuario',
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    verifica: (datos, callBack) =>{
        coneccion.query(`select * from usuario where usuario=? and contraseña=?`,
        [datos.usuario, datos.contraseña],
        (error,results,fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        }
      );
    }
}