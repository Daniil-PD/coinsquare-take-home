import React from 'react';
import { connect } from 'react-redux';
import AccountBalance from './AccountBalance';
import TradeInput from './TradeInput';
import TradeQuote from './TradeQuote';
import ActionButton from './ActionButton';

export class CurrencyPairTrading extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tradeKey: Date.now(),
      currAmount: null
    };
  }
  
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({type: 'BFX_FETCH_TICKER'});
  }
  
  render() {
    return (
      <div className="currency-pair-trading">
        <AccountBalance />
        <TradeInput
          key={`trade-input-${this.state.tradeKey}`}
          onEnterAmount={::this.onEnterAmount} />
        <TradeQuote
          currAmount={this.state.currAmount} />
        <ActionButton
          isActive={!!this.state.currAmount}
          title="Trade"
          onAction={::this.onTrade} />
      </div>
    );
  }
  
  onEnterAmount(amount) {
    this.setState({
      currAmount: amount
    });
  }
  
  onTrade() {
    const { dispatch } = this.props;
    dispatch({
      type: 'REQUEST_UPDATE_ACCOUNT',
      amount: this.state.currAmount
    });
    // refresh the form and refresh a ticker for more up-to-date quote prediction
    this.setState({
      tradeKey: Date.now(),
      currAmount: null
    }, () => dispatch({type: 'BFX_FETCH_TICKER'}));
  }
}

export default connect()(CurrencyPairTrading);