import React, { createContext, useState, useContext } from 'react';

export const CaptainDataContext = createContext();

export const useCaptainContext = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error('useCaptainContext must be used within CaptainContext');
    }
    return context;
};

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);

    const value = {
        captain,
        setCaptain: (newCaptain) => {
            setCaptain(newCaptain);
            if (newCaptain) {
                localStorage.setItem('captain', JSON.stringify(newCaptain));
            } else {
                localStorage.removeItem('captain');
            }
        }
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;