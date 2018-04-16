const binance = require('node-binance-api');
const constants = require('../binance.json');

binance.options({
  APIKEY: credentials.API_KEY,
  APISECRET: credentials.API_SECRET,
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});


const marketBuy = (symbol, price) => {
  return new Promise((resolve, reject) => {
    binance.balance((error, balances) => {
      if (error) {
        reject(error);
      }
      const quantity = balances.BNB.available * constants.TRADE_PERCENT / price;
      binance.marketBuy(symbol, quanity, null, (error, response) => {
        if (error) {
          reject(error)
        }
        resolve(response);
      });
    });
  });
}

const marketSell = (symbol, quantity) => {
  return new Promise((resolve, reject) => {
    binance.balance((error, balances) => {
      if (error) {
        reject(error);
      }
      const quantity = balances[symbol.substring(0, symbol.length -3)].available;
      binance.marketSell(symbol, quanity, null, (error, response) => {
        if (error) {
          reject(error)
        }
        resolve(response);
      });
    });
  });
}

module.exports = {
  marketBuy,
  marketSell
};