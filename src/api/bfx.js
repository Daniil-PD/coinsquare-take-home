const request = require('request');

export default class ApiBFX {
  static get CORSProxy() {
    const proxyURL = (window.location.host.indexOf('c9users') !== -1) ? 'http://coinsquare-take-home-daniil.c9users.io:8081/' : 'http://localhost:8081/';
    return (process.env.NODE_ENV !== 'production') ? proxyURL : '';
  }
  
  static get URL() {
    return 'https://api.bitfinex.com/v1';
  }
  
  static getTicker(symbol='BTCUSD') {
    return new Promise(resolve => {
      request.get(`${ApiBFX.CORSProxy}${ApiBFX.URL}/pubticker/${symbol}`, function(error, response, body) {
        resolve(body);
      });
    });
  }
}