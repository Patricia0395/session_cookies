module.exports = (req,res,next) =>{
    if(req.cookies.colorFondo){
        req.session.colorFondo = req.cookies.colorFondo
    }
    next()
}