import React, { Component } from 'react';

class StatisticsItem extends Component {
  render() {
    const { name, data, totalStats } = this.props;

    const whichItemShow = totalStats ? (
      <li className="statisticsItem">
        {name}: <span>{totalStats()}</span>
      </li>
    ) : (
      <li className="statisticsItem">
        {name}: <span>{data}</span>
      </li>
    );

    return whichItemShow;
  }
}

export default StatisticsItem;
