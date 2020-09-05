import React, { Component } from 'react';

import s from './PositiveFeedback.module.scss';

class PositiveFeedback extends Component {
  isClass = () => {
    const whatPercentage = this.props.countPositiveFeedback(
      this.props.totalStats,
      this.props.dataPositiveFeedback,
    );

    return Number(whatPercentage) < 35 || isNaN(whatPercentage)
      ? s.badFeedback
      : s.goodFeedback;
  };

  render() {
    const {
      totalStats,
      dataPositiveFeedback,
      countPositiveFeedback,
    } = this.props;

    return (
      <li>
        Positive feedback:
        <span className={this.isClass()}>
          {countPositiveFeedback(totalStats, dataPositiveFeedback)}%
        </span>
      </li>
    );
  }
}

export default PositiveFeedback;
