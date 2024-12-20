"use client"
import { createContext, useContext, ReactNode, useState } from 'react';


// Define the type for your context
type GlobalContextType = {
  messages: any;
};

// Define props interface for GlobalProvider
interface GlobalProviderProps {
    children: ReactNode;
    initialMessages: any;
}

// Create the context
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

// Create the provider component
export function GlobalProvider({ children, initialMessages }: GlobalProviderProps ) {
    const messages = initialMessages;

    return (
      <GlobalContext.Provider value={messages}>
        {children}
      </GlobalContext.Provider>
    );
}

// Create a custom hook to use the context
export default function useGlobal() {
    return useContext(GlobalContext);
    // const context = useContext(GlobalContext);
    // if (context === undefined) {
    //   throw new Error('useGlobal must be used within a GlobalProvider');
    // }
    // return context;
}

// export function ProviderClient({children, initialMessages}: GlobalProviderProps) {
//     return (
//         <GlobalProvider initialMessages={initialMessages}>
//             {children}
//         </GlobalProvider>
//     );
// }