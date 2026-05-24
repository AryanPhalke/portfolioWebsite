import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { Theme } from "../types";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider =({children} : {children: ReactNode}) =>{
    const [theme, setTheme] = useState<Theme>('dark');

    useEffect(()=>{
        document.documentElement.classList.toggle('dark', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev=>(prev)==='light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value= {{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
