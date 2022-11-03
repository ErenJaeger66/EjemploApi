const mpostulante = require("../modelos/postulante");
module.exports = {
    agregar: (req, res) => {
        const datos = req.body;
        const myfile = req.files.file;
        console.log(myfile);
        var fec = new Date();
        var d = fec.getDate();
        var m = fec.getMonth();
        var a = fec.getFullYear();
        var h = fec.getHours();
        var i = fec.getMinutes();
        var s = fec.getSeconds();
        myfile.name = "foto"+a+m+d+h+i+s+ myfile.name.substr(-4);        
        datos.foto=myfile.name;
        myfile.mv(`${process.env.DIR_FOTOS}${myfile.name}`, function (err){
            if(err){
                console.log(err);
                return res.status(500).send({msg:"Error en envio de archivo"});
            }
        })
        mpostulante.agregar(datos, (err, result) => {
            if (err) {
                console.log(err);
                return err;
            }
            return res.json({
                success: 1,
                data: result
            })
        })
    }
}