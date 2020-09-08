import React from 'react';

import s from './StatisticsSection.module.scss';

const StatisticsSection = ({ children, title }) => {
  return (
    <section className={s.StatisticsSection}>
      <h2 className={s.titleBlockBtn}>{title}</h2>
      {children}
    </section>
  );
};

export default StatisticsSection;
