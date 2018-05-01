import React from 'react';
import { connect } from 'react-redux';

export class AccountBalance extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { account } = this.props;

    return (
      <div className="account-balance">
        <h3 className="section-heading">Account Balance</h3>
        <div className="balance-line">
          <span className="balance-label">USD</span>
          <span className="balance-value">{account.amountUSD}</span>
        </div>
        <div className="balance-line">
          <span className="balance-label">BTC</span>
          <span className="balance-value">{account.amountBTC}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    account: state.account
  };
}

export default connect(mapStateToProps)(AccountBalance);
