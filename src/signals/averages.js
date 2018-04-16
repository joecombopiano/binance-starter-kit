const simple = (prices, length) => {
    return prices.length >= length ? 
     prices.slice(prices.length - length).reduce((sum, value ) => {
        return sum + value;
    }) / length : -1;
}

const ema = (prices, ema, interval) =>{
   const mulitplier = 2/ (interval +1);
   return ema ? (prices[prices.length -1] * mulitplier) + (ema * (1 - mulitplier)) : simple(prices, interval);
};

module.exports = {
  ema,
  simple
};