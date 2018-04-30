import React, { PropTypes } from "react";
import { connect } from "react-redux";

export class TradeInput extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currAmount: ''
    }
  }

  render() {
    const { account } = this.props

    return (
      <div className="trade-input">
        <h3 className="section-heading">Trade</h3>
        <div className="currency">USD</div>
        <input
          type="number"
          className="amount"
          max={account.amountUSD}
          placeholder="Enter your amount"
          onChange={::this.onChange}
          value={this.state.currAmount} />
      </div>
    )
  }
  
  onChange(e) {
    const amountMax = this.props.account.amountUSD
    const currAmount = (e.target.value > amountMax) ? amountMax : e.target.value
    this.setState({
      currAmount
    }, () => this.props.onEnterAmount(parseFloat(this.state.currAmount)))
  }
}

function mapStateToProps(state) {
  return {
    account: state.account,
  }
}

export default connect(mapStateToProps)(TradeInput);

TradeInput.propTypes = {
  onEnterAmount: PropTypes.func.isRequired,
}