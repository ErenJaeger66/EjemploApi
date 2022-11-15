const coneccion = require('../basedatos');

module.exports ={
    modificar:(datos,callBack) =>{
        coneccion.query(`update usuario set usuario=?, contraseña=?, nombre=?, tipo=? where id=?`,
        [datos.usuario, datos.contraseña, datos.nombre, datos.tipo, datos.id],
        (error,results,fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        }
      );
    },
    borrar:(id,callBack) =>{
        coneccion.query(
            `delete from usuario where id=?`,
            [id],
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    agregar:(datos,callBack) =>{
        coneccion.query(`insert into usuario (usuario,contraseña,nombre,tipo) values(?,?,?,?)`,
        [datos.usuario, datos.contraseña, datos.nombre, datos.tipo],
        (error,results,fields) =>{
            if(error){
                callBack(error);
            }
            return callBack(null, results[0]);
        }
      );
    },
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