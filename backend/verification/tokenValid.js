const jwt = require("jsonwebtoken");
function tokenValid(req, res, next){
     jwt.verify(req.token, "secretkey", (err, authData) => {
        //if token is not valid than than if condition run
        if (err) {
             res.json({
                message: "Token not valid",
            });
        }
        //token valid than run
         else {
            //  res.json({})
            // res.json({
            //     status: "200",
            //     message: "welcome to the api",
            //     authData
            // });
            next();
        }
    });
}
module.exports=tokenValid