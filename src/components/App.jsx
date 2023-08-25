// import { Component } from 'react';
import { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import css from './AppStyle.css';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback = state => {
//     this.setState(prevState => ({ [state]: prevState[state] + 1 }));
//   };

//   countTotalFeedback = () =>
//     this.state.good + this.state.neutral + this.state.bad;

//   countPositiveFeedbackPercentage = () => {
//     return Math.floor(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100 || 0
//     );
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className={css.container}>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           ></FeedbackOptions>
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             ></Statistics>
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = feedback => {
    if (feedback === 'good') setGood(prevFeedback => prevFeedback + 1);
    if (feedback === 'neutral') setNeutral(prevFeedback => prevFeedback + 1);
    if (feedback === 'bad') setBad(prevFeedback => prevFeedback + 1);
  };

  const countTotalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = Math.floor(
    (good / (good + neutral + bad)) * 100 || 0
  );
  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};