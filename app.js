const express = require("express")
const app = express();
const userRouting = require("./routes/user")
app.use(express.json());
app.get("/", (req, res) => {
    console.log("Registrando peticion")
    res.json({ mensaje: "API funcionando en vercel desde Kevin!" });
});
app.use("/api", userRouting)
module.exports = app;