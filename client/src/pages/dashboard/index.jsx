import {useUser} from '@clerk/clerk-react';
import { FinancialRecordForm } from './financial-record-form';
import FinancialRecordList from '/src/pages/dashboard/financial-record-list.jsx';
import "../dashboard/financial-record.css"
import { useMemo } from 'react';
import { useFinancialRecords } from '../../contexts/financial-record-context';

export const Dashboard=()=>{
    const {user}=useUser();
    const {records}=useFinancialRecords();
    let totalAmount=0;
    const totalMonthly=useMemo(()=>{
        records.forEach((record)=>{
            totalAmount+=record.amount;
        })
    },[records])
    return <div className="dashboard-container">
        <h1>Welcome {user?.firstName}! Here are your Finances:</h1>  
        <FinancialRecordForm/>
        <div>Total Monthly: {totalAmount}</div>
        <FinancialRecordList/>
    </div>
}