function Login(req,res) {
    console.log("Llegue al controller")
    res.send({mensaje : "Usuario logueado"})
}
module.exports = {
    Login
}