var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {

    var collection = db.collection("docs");
    var jsonInsert = {
        
        firstName: process.argv[2],
        lastName: process.argv[3]
    }

    collection.insert(jsonInsert, function(err, data) {
        console.log(JSON.stringify(jsonInsert));       
    });

    db.close();
});
