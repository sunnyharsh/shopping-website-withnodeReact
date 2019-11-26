const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let _db;
const mongoConnect= () =>{
    MongoClient.connect('mongodb://localhost:27017/assignment',{useUnifiedTopology: true })
    .then(client=>{
        console.log("connected !")
        _db=client.db() 
    })
    .catch(err=>{
        console.log(err)
    })
}
const getDb=()=>{
    if(_db){
        return _db;
    }
    throw 'no datadase found!'
}
exports.mongoConnect=mongoConnect;
exports.getDb=getDb;