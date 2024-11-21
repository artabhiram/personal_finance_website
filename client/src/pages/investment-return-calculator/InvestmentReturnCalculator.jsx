import React, { useState } from 'react';
import './InvestmentReturnCalculator.css';

const InvestmentReturnCalculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('');
  const [annualReturnRate, setAnnualReturnRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState('');

  const calculateFutureValue = () => {
    // Convert the annual return rate from percentage to decimal
    const rate = annualReturnRate / 100;
    // Apply the compound interest formula
    const value = initialInvestment * Math.pow(1 + rate, investmentPeriod);
    setFutureValue(value.toFixed(2)); // Set the future value with two decimal places
  };

  return (
    <div className="investment-return-calculator">
      <h2>Investment Return Calculator</h2>
      <form>
        <div>
          <label>Initial Investment:</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
            placeholder="Enter your investment"
          />
        </div>
        <div>
          <label>Annual Return Rate (%):</label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
            placeholder="Enter annual return rate"
          />
        </div>
        <div>
          <label>Investment Period (Years):</label>
          <input
            type="number"
            value={investmentPeriod}
            onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
            placeholder="Enter number of years"
          />
        </div>
      </form>
      <div className="actions">
        <button type="button" onClick={calculateFutureValue}>
          Calculate Future Value
        </button>
      </div>
      {futureValue && (
        <p className="results">
          In {investmentPeriod} years, your investment will grow to {futureValue}.
        </p>
      )}
    </div>
  );
};

export default InvestmentReturnCalculator;
