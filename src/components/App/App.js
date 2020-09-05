import React, { Component } from 'react';

import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import Statistics from '../Statistics/Statistics';
import StatisticsSection from '../StatisticsSection/StatisticsSection';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(prevState => {
      return (prevState[name] += 1);
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((ac, elem) => ac + elem);
  };

  render() {
    return (
      <StatisticsSection title="Please leave feedback">
        <ButtonsBlock onLeaveFeedback={this.leaveFeedback} />

        <Statistics
          title="Statistics"
          data={this.state}
          totalStats={this.countTotalFeedback}
        />
      </StatisticsSection>
    );
  }
}

export default App;
