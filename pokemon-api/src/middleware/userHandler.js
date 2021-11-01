const userMiddleware = async function(request, response, next) {
    console.log(request.headers);
    const username = request.headers.username;
    if(username){
        response.username=username;
        next();
    }else{
        response.status(401).send({ message: 'username header is missing '});
    }
}

module.exports = userMiddleware;


