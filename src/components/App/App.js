import '../App/App.css';
import React, { useState } from 'react';
import shortid from 'shortid';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';

/////////
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  console.dir(setGood);

  const handleDecrement = e => {
    console.log('e.target.name', e.target.name);
    if (e.target.name === 'good') {
      setGood(good + 1);
      return;
    }
    if (e.target.name === 'neutral') {
      setNeutral(neutral + 1);
      return;
    }
    if (e.target.name === 'bad') {
      setBad(bad + 1);
      return;
    }
    return;
  };

  const totalCount = () => {
    const total = good + neutral + bad;
    return total;
  };

  const positivePercentage = () => {
    if (totalCount() > 0) {
      const positivPerc = Math.floor((good * 100) / totalCount());
      return positivPerc;
    }
    return 0;
  };

  return (
    <div key={shortid.generate()} className="container">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleDecrement} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalCount()}
          positivePercentage={positivePercentage()}
        />
      </Section>
    </div>
  );
}

export default App;
