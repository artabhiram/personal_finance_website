import React, { useState } from 'react';
import './SavingsGoalCalculator.css';

const SavingsGoalCalculator = () => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [results, setResults] = useState('');

  const calculateTimeToGoal = () => {
    const months = (goalAmount - currentSavings) / monthlyContribution;
    setResults(`It will take approximately ${Math.ceil(months)} months to reach your savings goal.`);
  };

  const calculateMonthlySavings = () => {
    const requiredSavings = (goalAmount - currentSavings) / timeFrame;
    setResults(`You need to save ${requiredSavings.toFixed(2)} per month to reach your goal in ${timeFrame} months.`);
  };

  const calculateFutureSavings = () => {
    const futureSavings = currentSavings + monthlyContribution * timeFrame;
    setResults(`In ${timeFrame} months, you could have approximately ${futureSavings.toFixed(2)} saved.`);
  };

  return (
    <div className="savings-goal-calculator">
      <h2>Savings Goal Calculator</h2>
      <form>
        <div>
          <label>Current Savings:</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Monthly Contribution:</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Goal Amount:</label>
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(Number(e.target.value))}
          />
        </div>
        <div>
          <label>Time Frame (in months):</label>
          <input
            type="number"
            value={timeFrame}
            onChange={(e) => setTimeFrame(Number(e.target.value))}
          />
        </div>
      </form>
      <div className="actions">
        <button type="button" onClick={calculateTimeToGoal}>
          Calculate Time to Goal
        </button>
        <button type="button" onClick={calculateMonthlySavings}>
          Calculate Monthly Savings
        </button>
        <button type="button" onClick={calculateFutureSavings}>
          Calculate Future Savings
        </button>
      </div>
      {results && <p className="results">{results}</p>}
    </div>
  );
};

export default SavingsGoalCalculator;
