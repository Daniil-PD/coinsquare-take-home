const defaultState = {
  amountUSD: 156.12,
  amountBTC: 0.00000000
}

// account reducer
export default function account(state = defaultState, action) {
  switch (action.type) {
    case 'ACCOUNT_UPDATE':
      const lastPrice = parseFloat(JSON.parse(action.ticker).last_price)
      return {
        amountUSD: state.amountUSD - action.amount,
        amountBTC: action.amount / lastPrice
      }

    // initial state
    default:
      return state;
  }
}