const axios = require('axios');
const url = require('../binance.json').SLACK;

const notifySlack = (data, symbol, user) => {

    const message = `*${data.action} Alert*\n${user}\nMarket: ${symbol}\nPrice: ${data.strikePrice || data.salePrice}\n Quantity: ${data.quantity}`;
    console.log(message);

    return axios.post(url, {
        text: message
    });

};



module.exports = {
    notifySlack
};