

function validate(valid){
    if(valid == false){
        res.render(path.resolve(__dirname + '/../views/index.ejs'), {responce: 'invalid url'})
    }

    else{

        connection.query(`select * from hashurl where url = '${req.body.url}'`, (err, result) => {
            
            ifError(res, err)
            if(result.length == 0){
                
                createHash(res, req.body.url)
            }
            
            else{
                res.render(path.resolve(__dirname + '/../views/index.ejs'), {responce: 'http://localhost:9000/resolve/' + result[0].hash})
            }
        })
    }

}

module.exports = validate