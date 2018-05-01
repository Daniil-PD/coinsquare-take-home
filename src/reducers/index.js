import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import account from './account';
import ticker from './ticker';

export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  account: account,
  ticker: ticker
});
