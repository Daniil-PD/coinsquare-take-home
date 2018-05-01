import { call, put } from 'redux-saga/effects';
import ApiBFX from '../api/bfx';

export function* updateAccount(action) {
  const ticker = yield call(ApiBFX.getTicker);
  
  yield put({
    type: 'ACCOUNT_UPDATE',
    amount: action.amount,
    ticker: ticker
  });
}