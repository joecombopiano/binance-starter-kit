const binance = require('node-binance-api');
const binanceConstants = require('./binance.json');
const MongoClient = require('mongodb').MongoClient;

binance.options({
  APIKEY: binanceConstants.API_KEY,
  APISECRET: binanceConstants.API_SECRET,
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});


const getTicker = () => {
  binance.bookTickers((error, ticker) => {
    const exchanges = ticker
      .filter(x => x.symbol.endsWith(binanceConstants.MARKET))
      .map(x => ({
        symbol: x.symbol,
        price: x.bidPrice
      }))
      .forEach(x => {
        //doCalc on x
      });
  });
}

const job = new CronJob('0 */60 * * * *', getTicker, () => { /*on complete */ }, true, 'America/Los_Angeles');