const request = require('request')

export default class ApiBFX {
  static get CORSProxy() {
    return (process.env.NODE_ENV !== 'production') ? 'http://coinsquare-take-home-daniil.c9users.io:8081/' : ''
  }
  
  static get URL() {
    return 'https://api.bitfinex.com/v1'
  }
  
  static getTicker(symbol='BTCUSD') {
    return new Promise(resolve => {
      request.get(`${ApiBFX.CORSProxy}${ApiBFX.URL}/pubticker/${symbol}`, function(error, response, body) {
        resolve(body)
      })
    })
  }
}