import React from 'react';

import StatisticsItem from './StatisticsItem';
import Notification from '../Notification/Notification';
import PositiveFeedback from '../PositiveFeedback/PositiveFeedback';

import s from './StatisticsSection.module.scss';

const Statistics = ({
  data,
  title,
  totalStats,
  countPositiveFeedbackPercentage,
}) => {
  const { good, neutral, bad } = data;

  return (
    <>
      <h3>{title}</h3>

      {totalStats() === 0 && <Notification message="No feedback given" />}

      {totalStats() > 0 && (
        <>
          <ul className={s.Statistics}>
            <StatisticsItem name="Good" data={good} />
            <StatisticsItem name="Neutral" data={neutral} />
            <StatisticsItem name="Bad" data={bad} />
          </ul>

          <ul className={s.StatisticsResoult}>
            <StatisticsItem name="Total" totalStats={totalStats} />
            <PositiveFeedback
              countPositiveFeedback={countPositiveFeedbackPercentage}
            />
          </ul>
        </>
      )}
    </>
  );
};

export default Statistics;
