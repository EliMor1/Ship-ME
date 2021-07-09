const jwt = require('jsonwebtoken');

const verifyToken = (req,res,next) => {
    const token = req.headers['access-token'];
    console.log(token);
    if(!token){
        return res.send('Access denied.');
    }
    try{
        const verify = jwt.verify(token, process.env.TOKEN);
        const verifiedUser = verify;
        res.send(verifiedUser);
        next();
    }
    catch(error){
        res.status(401).send('Invalid Access Token Generated.');
    }
}

module.exports = verifyToken;