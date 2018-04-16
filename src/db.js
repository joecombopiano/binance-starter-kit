const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'binance';

const saveCoin = (coinData) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const db = client.db(dbName);
      const collection = db.collection('documents');

      collection.updateOne(coinData,  (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });

      client.close();
    });
  });
}

const getCoin = (symbol) => {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, client) => {
      const db = client.db(dbName);
      const collection = db.collection('documents');

      collection.findOne({symbol: symbol}, (err, result) => {
        if(err){
          reject(err);
        }
        resolve(result);
      });
      
      client.close();
    });
  })
}