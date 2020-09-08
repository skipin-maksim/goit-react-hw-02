import React, { Component } from 'react';

import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import Statistics from '../Statistics/Statistics';
import StatisticsSection from '../Statistics/StatisticsSection';

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
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <StatisticsSection title="Please leave feedback">
        <ButtonsBlock onLeaveFeedback={this.leaveFeedback} />

        <Statistics
          title="Statistics"
          data={this.state}
          totalStats={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </StatisticsSection>
    );
  }
}

export default App;
