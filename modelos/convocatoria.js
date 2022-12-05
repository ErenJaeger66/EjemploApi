const coneccion = require('../basedatos');
module.exports ={
    modificar:(datos,callBack) =>{
        coneccion.query(`update convocatorias set numero=?, semestre=?, fecpublicacion=?, feclimite=? where id=?`,
        [datos.numero, datos.semestre, datos.fecpublicacion, datos.feclimite, datos.id],
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
            `delete from convocatorias where id=?`,
            [id],
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        )
    },
    agregar:(datos, callBack) =>{
        coneccion.query('insert into convocatorias (numero, semestre, fecpublicacion, feclimite) values (?, ?, ?, ?)',
            [datos.numero, datos.semestre, datos.fecpublicacion, datos.feclimite],
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results[0]);
            }
        )
    },
    listar:(callBack) =>{
        coneccion.query(
            'select * from convocatorias',
            (error, results)=>{
                if (error) callBack(error);
                return callBack(null, results);
            }
        );
    }
}