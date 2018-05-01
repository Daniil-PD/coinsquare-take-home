import { takeLatest } from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { bfxFetchTicker } from './bfx';
import { updateAccount } from './account';

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'BFX_FETCH_TICKER', bfxFetchTicker),
    fork(takeLatest, 'REQUEST_UPDATE_ACCOUNT', updateAccount)
  ];
}
