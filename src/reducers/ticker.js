// ticker reducer
export default function ticker(state = {}, action) {
  switch (action.type) {
    case 'BFX_TICKER_SAVE':
      return action.ticker;

    // initial state
    default:
      return state;
  }
}