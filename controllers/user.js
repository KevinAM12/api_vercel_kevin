function Login(req,res){
    console.log("LLegue a controller")
    res.send({mensaje: "Usuario logueado"})

}
module.exports={
    Login
}