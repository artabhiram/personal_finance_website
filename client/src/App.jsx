import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from './pages/dashboard';
import { Auth } from './pages/authentication';
import { FinancialRecordsProvider } from './contexts/financial-record-context';

function App() {
  return (
    <BrowserRouter>
      <FinancialRecordsProvider>
        <div className="app-container">
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/auth' element={<Auth />} />
          </Routes>
        </div>
      </FinancialRecordsProvider>
    </BrowserRouter>
  );
}

export default App;
