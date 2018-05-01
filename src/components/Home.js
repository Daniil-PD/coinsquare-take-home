import React from 'react';
import CurrencyPairTrading from './common/CurrencyPairTrading';

export default class Home extends React.Component {
  render() {
    return (
      <div className="page-home">
        <CurrencyPairTrading />
      </div>
    );
  }
}
