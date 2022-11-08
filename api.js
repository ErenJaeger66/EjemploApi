const express = require("express");
const dotenv = require("dotenv").config();
const bodyparser = require("body-parser");
const cors = require("cors");
const FileUpload = require('express-fileupload');

var corsOptions = {
    origin: ["http://127.0.0.1:8081", "http://localhost:8081"],
    optionsSuccessStatus: 200
}

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(FileUpload());
app.use(cors(corsOptions));

app.use(require("./rutas/index.js"));
app.use("/usr",require("./rutas/usuario"));
app.use("/postulante", require("./rutas/postulante"));
app.use("/convocatoria", require("./rutas/convocatoria"));

app.listen(process.env.PORT, () => {
    console.log("Ya funciona el servidor");
});