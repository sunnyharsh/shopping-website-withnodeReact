const jwt = require("jsonwebtoken");

exports.login=(req, res)=>{
    //MOCK USER
    let email=req.body.email;
    let pass= req.body.pass;
    const user = {
        pass:pass,
        email: email
    };
    jwt.sign({ user }, "secretkey", (err, token) => {
        
        res.json({
            token
        }).cookie('token', token);
    });
}