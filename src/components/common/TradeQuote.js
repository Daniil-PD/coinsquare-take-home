import React, { PropTypes } from "react";
import { connect } from "react-redux";

export class TradeQuote extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      currQuote: 0
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      currQuote: this.calculateQuote(nextProps)
    })
  }

  render() {
    return (
      <div className="trade-quote">
        <h3 className="section-heading">For</h3>
        <div className="currency">BTC</div>
        <div className="quote">{this.state.currQuote}</div>
      </div>
    )
  }
  
  calculateQuote(props) {
      const { ticker, currAmount } = props
      if (!props.currAmount || Object.keys(ticker).length === 0) {
        return 'Display Quote'
      }
      const lastPrice = parseFloat(JSON.parse(ticker).last_price)
      return currAmount / lastPrice
  }
}

function mapStateToProps(state) {
  return {
    ticker: state.ticker,
  }
}

export default connect(mapStateToProps)(TradeQuote);

TradeQuote.propTypes = {
  currAmount: PropTypes.number,
}