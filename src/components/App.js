import React from "react";
import { connect } from "react-redux";
import "../stylesheets/main.scss";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

// export the connected class
function mapStateToProps(state) {
  return {
    account: state.account || {},
    ticker: state.ticker || {},
  };
}
export default connect(mapStateToProps)(App);