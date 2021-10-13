
 const {validationResult} = require('express-validator');

module.exports = {
    index: (req,res)=>{
        return res.render('index', { 
            title: 'Session y Cookies'});
    },
    users: (req, res) =>{
        let errors = validationResult(req);
        //let user = users.find(user => user.email === req.body.email)
        if (errors.isEmpty()){
            
            const {name,color,edad,email, remember} = req.body;

            req.session.colorFondo = color;
            res.locals.colorFondo = req.session.colorFondo;
            
         if(remember){
             res.cookie('colorFondo',req.session.colorFondo, {maxAge : 1000 * 60})
         }
        
        return res.render('index', {
            name,
            color,
            edad,
            email
        })
    
    }else {
             res.render('index',{
                old: req.body,
                errors: errors.mapped()
                
            })
        }
    },
        
   logout : (req, res) =>{
    res.render('logout')
},

destroy: (req, res) => {
   
    req.session.destroy();
    res.cookie('colorFondo', null, {maxAge: -1})
    res.redirect('/')
} 
  
}
