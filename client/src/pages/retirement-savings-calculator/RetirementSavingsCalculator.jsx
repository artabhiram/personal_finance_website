import React, { useState } from 'react';
import './RetirementSavingsCalculator.css';

const RetirementSavingsCalculator = () => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [expectedReturnRate, setExpectedReturnRate] = useState('');
  const [yearsToRetirement, setYearsToRetirement] = useState('');
  const [retirementFund, setRetirementFund] = useState('');
  const [error, setError] = useState('');

  const calculateRetirementFund = () => {
    setError(''); // Reset error on each calculation attempt

    const currentSavingsAmount = Number(currentSavings);
    const monthlyContributionAmount = Number(monthlyContribution);
    const annualReturnRate = Number(expectedReturnRate) / 100;
    const years = Number(yearsToRetirement);

    // Validate inputs
    if (isNaN(currentSavingsAmount) || isNaN(monthlyContributionAmount) || isNaN(annualReturnRate) || isNaN(years)) {
      setError("Please fill all fields correctly.");
      return;
    }

    // Formula for calculating future value of retirement savings
    const monthsToRetirement = years * 12;

    // Check if the expected annual return rate is 0
    if (annualReturnRate === 0) {
      // If return rate is 0, future value is simply current savings + total contributions
      const futureValue = currentSavingsAmount + (monthlyContributionAmount * 12 * years);
      setRetirementFund(`Your estimated retirement fund will be ${futureValue.toFixed(2)}`);
    } else {
      const monthlyReturnRate = annualReturnRate / 12;

      // Compound interest formula
      const futureValue = currentSavingsAmount * Math.pow(1 + monthlyReturnRate, monthsToRetirement) +
                          monthlyContributionAmount * ((Math.pow(1 + monthlyReturnRate, monthsToRetirement) - 1) / monthlyReturnRate);

      setRetirementFund(`Your estimated retirement fund will be ${futureValue.toFixed(2)}`);
    }
  };

  return (
    <div className="retirement-savings-calculator">
      <h2>Retirement Savings Calculator</h2>
      <form>
        <div>
          <label>Current Savings :</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label>Monthly Contribution :</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label>Expected Annual Return Rate (%):</label>
          <input
            type="number"
            value={expectedReturnRate}
            onChange={(e) => setExpectedReturnRate(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label>Years to Retirement:</label>
          <input
            type="number"
            value={yearsToRetirement}
            onChange={(e) => setYearsToRetirement(e.target.value)}
            min="1"
          />
        </div>
      </form>
      <div className="actions">
        <button type="button" onClick={calculateRetirementFund}>Calculate Retirement Fund</button>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {retirementFund && <p className="retirement-result">{retirementFund}</p>}
    </div>
  );
};

export default RetirementSavingsCalculator;
