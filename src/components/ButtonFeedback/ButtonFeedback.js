import React, { Component } from 'react';

import {
  allBtn,
  GoodBtn,
  NeutralBtn,
  BadBtn,
} from './ButtonFeedback.module.scss';

class ButtonFeedback extends Component {
  switchColorClass = btnName => {
    switch (btnName) {
      case 'good':
        return GoodBtn;
      case 'neutral':
        return NeutralBtn;
      case 'bad':
        return BadBtn;

      default:
        return allBtn;
    }
  };

  render() {
    const { name, onLeaveFeedback } = this.props;

    return (
      <button
        type="button"
        className={this.switchColorClass(name)}
        onClick={() => {
          onLeaveFeedback(name);
        }}
      >
        {name}
      </button>
    );
  }
}

export default ButtonFeedback;
