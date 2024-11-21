import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/authentication';
import SavingsGoalCalculator from './pages/savings-goal/SavingsGoalCalculator'; // Savings Goal Calculator
import InvestmentReturnCalculator from './pages/investment-return-calculator/InvestmentReturnCalculator'; // Investment Return Calculator
import LoanEMICalculator from './pages/loan-emi-calculator/LoanEMICalculator'; // Loan EMI Calculator
import RetirementSavingsCalculator from './pages/retirement-savings-calculator/RetirementSavingsCalculator'; // Retirement Savings Calculator
import TaxCalculator from './pages/tax-calculator/TaxCalculator'; // Tax Calculator
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <BrowserRouter>
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Dashboard</Link>
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            <Link to="/savings-goal" className="text-lg hover:underline">
              Savings Goal Calculator
            </Link>
            <Link to="/investment-return" className="text-lg hover:underline">
              Investment Return Calculator
            </Link>
            <Link to="/loan-emi" className="text-lg hover:underline">
              Loan EMI Calculator
            </Link>
            <Link to="/retirement-savings" className="text-lg hover:underline">
              Retirement Savings Calculator
            </Link>
            <Link to="/tax-calculator" className="text-lg hover:underline"> {/* New Link */}
              Tax Calculator
            </Link>


            {/* Authentication Button */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link to="/auth" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                Sign In
              </Link>
            </SignedOut>
          </div>
        </nav>
      </header>

      <main className="py-6 px-4 container mx-auto">
        <FinancialRecordsProvider>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/savings-goal" element={<SavingsGoalCalculator />} />
            <Route path="/investment-return" element={<InvestmentReturnCalculator />} />
            <Route path="/loan-emi" element={<LoanEMICalculator />} />
            <Route path="/retirement-savings" element={<RetirementSavingsCalculator />} />
            <Route path="/tax-calculator" element={<TaxCalculator />} /> {/* New Route */}
          </Routes>
        </FinancialRecordsProvider>
      </main>
    </BrowserRouter>
  );
}

export default App;
