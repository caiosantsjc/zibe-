const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 2105;

const app = express();

app.use(cors());

app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
})