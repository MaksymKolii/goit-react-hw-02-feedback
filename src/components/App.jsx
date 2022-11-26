import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyles';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = key => {
    this.setState(prev => ({
      [key]: prev[key] + 1,
    }));
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, ind) => acc + ind, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const tot = this.countTotalFeedback();
    return Math.round((this.state.good * 100) / tot);
  };
  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <section>
          <h2>Please leave feedback</h2>
        </section>
        <section>
          <button type="button" onClick={this.onBtnClick}>
            {good}
          </button>
          <button type="button" onClick={this.onBtnClick}>
            {neutral}
          </button>
          <button type="button" onClick={this.onBtnClick}>
            {bad}
          </button>
        </section>
        <section>
          <h2>Statistics</h2>
          <ul>
            <li>
              <span>Good:</span>
              <span>{good}</span>
            </li>
            <li>
              <span>Neutral:</span>
              <span>{neutral}</span>
            </li>
            <li>
              <span>Bad:</span>
              <span>{bad}</span>
            </li>
            <li>
              <span>Total:</span>
              <span>{total}</span>
            </li>
            <li>
              <span>Positive feedback</span>
              <span>{this.countPositiveFeedbackPercentage()}</span>
            </li>
          </ul>
        </section>

        <GlobalStyle />
      </>
    );
  }
}
