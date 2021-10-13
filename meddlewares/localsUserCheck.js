module.exports = (req,res,next) => {
    if(req.session.colorFondo){
        res.locals.colorFondo = req.session.colorFondo
    }
    next()

}