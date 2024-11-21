import React, { useState } from 'react';
import './LoanEMICalculator.css';

const LoanEMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEMI = () => {
    const principal = Number(loanAmount);
    const rate = Number(interestRate) / 100 / 12; // Monthly interest rate
    const tenure = Number(loanTenure);

    if (rate === 0) {
      // If interest rate is 0, calculate EMI as a simple division
      const emiWithoutInterest = principal / tenure;
      setEmi(`Your monthly EMI is ${emiWithoutInterest.toFixed(2)} (Interest Rate: 0%)`);
    } else {
      // Use the EMI formula for non-zero interest rate
      const emiCalculated = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
      setEmi(`Your monthly EMI is ${emiCalculated.toFixed(2)} (Interest Rate: ${interestRate}%)`);
    }
  };

  return (
    <div className="loan-emi-calculator">
      <h2>Loan EMI Calculator</h2>
      <form>
        <div>
          <label>Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            min="1"
          />
        </div>
        <div>
          <label>Interest Rate (Annual):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            min="0"
          />
        </div>
        <div>
          <label>Loan Tenure (in months):</label>
          <input
            type="number"
            value={loanTenure}
            onChange={(e) => setLoanTenure(e.target.value)}
            min="1"
          />
        </div>
      </form>
      <div className="actions">
        <button type="button" onClick={calculateEMI}>Calculate EMI</button>
      </div>
      {emi && <p className="emi-result">{emi}</p>}
    </div>
  );
};

export default LoanEMICalculator;
