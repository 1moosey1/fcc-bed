var mongo = require("mongodb").MongoClient;

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {

    if (err) throw err;
    var collection = db.collection("prices");

    var selection = { $match: { size: process.argv[2] }},
        average = { $group: { _id: 'average', average: { $avg: '$price' }}};
    
    collection.aggregate([selection, average]).toArray(function(err, results) {

        if (err) throw err;
        var result = results[0];
        console.log(Number(result.average).toFixed(2));
        db.close();
    });
});
