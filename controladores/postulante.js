const mpostulante = require('../modelos/postulante')
module.exports ={
    agregar:(req, res) =>{
        const datos=req.body;
        mpostulante.agregar(datos,(err,result)=>{
            if (err){
                console.log(err);
                return err;
            }
            return res.json({
                success:1,
                data:result
            })
        })
    }
} 