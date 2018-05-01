import React, { PropTypes } from 'react';

export default class ActionButton extends React.Component {
  render() {
    return (
      <button
        disabled={!this.props.isActive}
        className="btn-action"
        onClick={this.props.onAction}>
        {this.props.title}
      </button>
    );
  }
}

ActionButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onAction: PropTypes.func.isRequired,
};