import React, { useState } from 'react';

const TaxCalculator = () => {
  const [income, setIncome] = useState('');
  const [deductions, setDeductions] = useState('');
  const [state, setState] = useState('');
  const [tax, setTax] = useState(null);

  const taxSlabs = [
    { upTo: 250000, rate: 0 }, // No tax for income up to 2,50,000
    { upTo: 500000, rate: 0.05 }, // 5% for income between 2,50,001 to 5,00,000
    { upTo: 1000000, rate: 0.2 }, // 20% for income between 5,00,001 to 10,00,000
    { upTo: Infinity, rate: 0.3 }, // 30% for income above 10,00,000
  ];

  const calculateTax = () => {
    let taxableIncome = income - deductions;

    if (taxableIncome <= 0) {
      setTax(0);
      return;
    }

    let calculatedTax = 0;
    let remainingIncome = taxableIncome;

    for (const slab of taxSlabs) {
      if (remainingIncome > slab.upTo) {
        calculatedTax += slab.upTo * slab.rate;
        remainingIncome -= slab.upTo;
      } else {
        calculatedTax += remainingIncome * slab.rate;
        break;
      }
    }

    setTax(calculatedTax.toFixed(2));
  };

  return (
    <div className="tax-calculator">
      <h2 className="text-2xl font-bold mb-4">Income Tax Calculator</h2>

      <div className="input-field mb-4">
        <label className="block text-lg font-semibold mb-1">Annual Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="border p-2 w-full"
          placeholder="Enter your annual income"
        />
      </div>

      <div className="input-field mb-4">
        <label className="block text-lg font-semibold mb-1">
          Deductions (e.g., 80C, medical, etc.):
        </label>
        <input
          type="number"
          value={deductions}
          onChange={(e) => setDeductions(Number(e.target.value))}
          className="border p-2 w-full"
          placeholder="Enter total deductions"
        />
      </div>

      <div className="input-field mb-4">
        <label className="block text-lg font-semibold mb-1">State (optional):</label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Select your state</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Maharashtra">Maharashtra</option>
        </select>
      </div>

      <button
        onClick={calculateTax}
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Calculate Tax
      </button>

      {tax !== null && (
        <div className="result mt-4 p-4 bg-gray-100 border">
          <h3 className="text-lg font-bold">Tax Calculation Result:</h3>
          <p className="text-gray-700">Taxable Income: ₹{(income - deductions).toFixed(2)}</p>
          <p className="text-gray-700">Estimated Tax: ₹{tax}</p>
        </div>
      )}
    </div>
  );
};

export default TaxCalculator;
