const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) =>{

    mongoClient.connect('mongodb+srv://ecom:ecomdb@cluster0.k0c40pl.mongodb.net/ecom?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        
        try{
            _db = client.db();
            callback();
        }
        catch(err){
            console.log(err);
        }
    })
    .catch(err=>{
        console.log("err in connecting",err);
        throw err;
    });
}


const getDb = ()=>{

    if(_db){
        return _db;
    }

    throw "not able to connect";
}

exports.getDb = getDb;
exports.mongoConnect = mongoConnect;