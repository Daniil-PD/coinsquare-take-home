const defaultState = {
  amountUSD: 156.12,
  amountBTC: Number(0).toFixed(8)
}

// account reducer
export default function account(state = defaultState, action) {
  switch (action.type) {
    case 'ACCOUNT_UPDATE':
      const lastPrice = parseFloat(JSON.parse(action.ticker).last_price)
      return {
        amountUSD: Number(state.amountUSD - action.amount).toFixed(2),
        amountBTC: Number(action.amount / lastPrice).toFixed(8)
      }

    // initial state
    default:
      return state;
  }
}