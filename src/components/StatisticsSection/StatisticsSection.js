import React, { Component } from 'react';

import s from './StatisticsSection.module.scss';

class StatisticsSection extends Component {
  render() {
    const { children, title } = this.props;

    return (
      <section className={s.StatisticsSection}>
        <h2 className={s.titleBlockBtn}>{title}</h2>
        {children}
      </section>
    );
  }
}

export default StatisticsSection;
