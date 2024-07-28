import { createContext, ReactNode } from "react";

interface ContextProviderProps {
    children: ReactNode;
}

export const Context = createContext({});

const ContextProvider = ({ children }: ContextProviderProps) => {
    const contextValue = {};

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
