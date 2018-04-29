import { call, put } from "redux-saga/effects";
import ApiBFX from "../api/bfx";

// fetch the ticker
export function* bfxFetchTicker(action) {
  const ticker = yield call(ApiBFX.getTicker);

  // save the ticker in state
  yield put({
    type: 'BFX_TICKER_SAVE',
    ticker: ticker,
  });
}