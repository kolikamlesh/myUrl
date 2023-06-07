
function ifError(res, err){

    if(err != undefined){
        res.sendFile('../public/error.html')
    }
}

module.exports = ifError