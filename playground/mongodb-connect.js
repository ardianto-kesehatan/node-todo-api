const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  
     const db = client.db(dbName);  
      insertDocuments(db, function() {
        client.close();
    });
  });

const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('Users');
    // Insert some documents

    //collection.insertMany([
/*         collection.insertOne([
        {
            name:'',
            age:false,
            location:''
        } */

        collection.insertOne(
            {
                name:'Ayam',
                age:3,
                location:'Kandang'
            }
    , function(err, result) {
        if(err) {
            return console.log('unable to insert user',err);
        }

        console.log(result.ops[0]._id.getTimestamp())
/*    assert.equal(err, null);
      assert.equal(3, result.result.n);
      assert.equal(3, result.ops.length);
      console.log("Inserted 3 documents into the collection"); */
      callback(result);
    });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('documents');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  }