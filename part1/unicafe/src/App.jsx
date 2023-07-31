import { useState } from "react";

const StatisticLine = ({ total }) => {
  return <p>{total / 3}</p>;
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>statistics</h2>

      <table>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{neutral + bad + good}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>
            {" "}
            <StatisticLine total={good + bad + neutral} />
          </td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{bad + good + (neutral / 3) * 100}</td>
        </tr>
      </table>
    </>
  );
};

const Button = ({ title, handleClick }) => {
  return <button onClick={handleClick}>{title}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [feedback, setFeedback] = useState(false);

  const handleGood = () => {
    setGood(good + 1);
    setFeedback(true);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setFeedback(true);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setFeedback(true);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" handleClick={handleGood} />
      <Button title="neutral" handleClick={handleNeutral} />
      <Button title="bad" handleClick={handleBad} />

      {feedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
