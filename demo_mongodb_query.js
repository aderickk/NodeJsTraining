var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    
    /*
    var myObj = {name: "Feel Good Inc", address: "Highway to Hell 32"};
    dbo.collection("customers").insertOne(myObj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    }); */

    /* var myObjs = [{name: "Church Inc", address: "Stairway to Heaven 44"},
                  {name: "Fallen Angel Inc", address: "Lust street 79"},
                  {name: "Earth Inc", address: "Yurlungur 99"}
    ];
    dbo.collection("customers").insertMany(myObjs, function(err, res){
        if (err) throw err;
        console.log("3 documents added");
    }); */

    /* dbo.collection("customers").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(result);
    }); */

   /*  dbo.collection("customers").find({}, {projection: {_id: 0, name: 1, address:1}}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        console.log(result[2].address);
    }); */

    var query1 = {address: /to/};
    dbo.collection("customers").find(query1).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
    });
    db.close();
});