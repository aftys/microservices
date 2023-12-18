import { IThemeContext } from '@interfaces/IThemeContext';
import React, { createContext, useState,ReactNode } from 'react';

const ThemeContext = createContext<IThemeContext>({ theme: 'light', toggleTheme: () => {} });

interface ThemeProviderProps{
  children: ReactNode;
}
const ThemeProvider : React.FC<ThemeProviderProps> = ({ children} ) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};



export { ThemeProvider, ThemeContext };
