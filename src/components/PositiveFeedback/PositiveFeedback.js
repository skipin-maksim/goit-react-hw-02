import React from 'react';

import s from './PositiveFeedback.module.scss';

const PositiveFeedback = ({ countPositiveFeedback }) => {
  return (
    <li>
      Positive feedback:
      <span className={s.Feedback}>{countPositiveFeedback()}%</span>
    </li>
  );
};

export default PositiveFeedback;
