import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/authentication';
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { SignedIn, UserButton } from '@clerk/clerk-react';

function App() {
  return (
    <BrowserRouter className='w-full'>
      <div className="app-container p-0 bg-[#3498DB] w-full p-4 mb-3">
       
        <div className="navbar bg-[#3498DB] w-full flex items-center justify-between text-white">
          <Link to='/'>Dashboard</Link>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>

      <div>
        <FinancialRecordsProvider>
        <div className="app-container">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </div>
      </FinancialRecordsProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
