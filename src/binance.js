const binance = require('node-binance-api');

binance.options({
  APIKEY: credentials.API_KEY,
  APISECRET: credentials.API_SECRET,
  useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
  test: true // If you want to use sandbox mode where orders are simulated
});

const buyCoin = () => {
  return new Promise((resolve, reject) => {

  });
}

const sellCoin = () => {
  return new Promise((resolve, reject) => {

  });
}