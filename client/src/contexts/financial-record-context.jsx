import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";

export const FinancialRecordsContext = createContext(undefined);

export const FinancialRecordsProvider = ({ children }) => {
    const [records, setRecord] = useState([]);
    const { user } = useUser();

    const fetchRecords = async () => {
        if (!user) return;
        const response = await fetch(`http://localhost:3000/financial-records/getAllByUserID/${user.id}`);

        if (response.ok) {
            const records = await response.json();
            console.log(records);
            setRecord(records);
        }
    };

    useEffect(() => {
        fetchRecords();
    }, [user]);

    const addRecord = async (record) => {
    try {
        const response = await fetch("http://localhost:3000/financial-records/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const newRecord = await response.json();
        setRecord((prev) => [...prev, newRecord]);

    } catch (error) {
        console.error("Failed to add record:", error);
    }
};

    return (
        <FinancialRecordsContext.Provider value={{ records, addRecord }}>
            {children}
        </FinancialRecordsContext.Provider>
    );
};

export const useFinancialRecords = () => {
    const context = useContext(FinancialRecordsContext);

    if (!context) {
        throw new Error("Context Not Found");
    }
    return context;
};
