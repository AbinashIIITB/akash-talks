"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CounsellingDialogContextType {
    isOpen: boolean;
    openDialog: () => void;
    closeDialog: () => void;
}

const CounsellingDialogContext = createContext<CounsellingDialogContextType | undefined>(undefined);

export function useCounsellingDialog() {
    const context = useContext(CounsellingDialogContext);
    if (!context) {
        throw new Error('useCounsellingDialog must be used within CounsellingDialogProvider');
    }
    return context;
}

export function CounsellingDialogProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => setIsOpen(true);
    const closeDialog = () => setIsOpen(false);

    return (
        <CounsellingDialogContext.Provider value={{ isOpen, openDialog, closeDialog }}>
            {children}
        </CounsellingDialogContext.Provider>
    );
}
