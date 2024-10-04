import { createContext, useState, useContext } from "react";

interface ThemeContext {
    theme: 'light' | 'dark' | 'blue';
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>(null!);

interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {

    const [theme, setTheme] = useState<'light' | 'dark' | 'blue'>('light');

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark'); 
        } else if (theme === 'dark') {
            setTheme('blue');  
        } else if (theme === 'blue') {
            setTheme('light'); 
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);
    
