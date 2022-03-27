//? Controlador de APKI_KEY de los headers

const customHeader = (req, res, next) => {
//? Englobamos la funcion  en tal caso de que se reviente 
    try{
        //? Verifica si en los headers se esta enviando la llave de autorización
        const apiKey = req.headers.api_key;
        //? En caso de ser valida la API_KEY deja continuar
        if(apiKey === 'api-publica-123'){
            next()
        }else{
            //? En caso de no ser correcto el Header enviado arroja un error status 403 (PROHIBIDO) 
            res.status(403)
            res.send({error:"APY_KEY_NO_ES_CORRECTA"})
        }
    }catch(e){
        //? En caso de no ser correcto el Header enviado arroja un error status 403 (PROHIBIDO) 
        res.status(403)
        res.send({error: "ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"})
    }

    // console.log(req.headers)
    next()
}

//! Exportaciones
module.exports = customHeader;