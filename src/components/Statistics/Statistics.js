import React, { Component } from 'react';

import StatisticsItem from '../StatisticsItem/StatisticsItem';
import Notification from '../Notification/Notification';
import PositiveFeedback from '../PositiveFeedback/PositiveFeedback';

import s from './Statistics.module.scss';

class Statistics extends Component {
  countPositiveFeedbackPercentage = (callback, data) => {
    return Math.floor((data / callback()) * 100);
  };

  isFeedbackGiven = ({ data, totalStats }) => {
    const { good, neutral, bad } = data;

    return totalStats() === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <>
        <ul className={s.Statistics}>
          <StatisticsItem name="Good" data={good} />
          <StatisticsItem name="Neutral" data={neutral} />
          <StatisticsItem name="Bad" data={bad} />
        </ul>

        <ul className={s.StatisticsResoult}>
          <StatisticsItem name="Total" totalStats={totalStats} />
          <PositiveFeedback
            dataPositiveFeedback={good}
            countPositiveFeedback={this.countPositiveFeedbackPercentage}
            totalStats={totalStats}
          />
        </ul>
      </>
    );
  };

  render() {
    const { title } = this.props;

    return (
      <>
        <h3>{title}</h3>
        {this.isFeedbackGiven(this.props)}
      </>
    );
  }
}

export default Statistics;
