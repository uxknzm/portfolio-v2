import React, { createContext, Dispatch, SetStateAction } from 'react';
import detectDarkMode from '../utils/detectDarkMode';
import { useLocalStorage } from '../utils/useLocalStorage';


type TypeSetState<T> = Dispatch<SetStateAction<boolean>>;

type Props = {
    children: React.ReactNode;
};

interface IContext {
    lightMode: boolean;
    setLightMode: TypeSetState<boolean> | null;
}

export const ThemeContext = createContext<IContext>({ lightMode: false, setLightMode: null });

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [lightMode, setLightMode] = useLocalStorage('lightMode', detectDarkMode());

    if (lightMode) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }



    return <ThemeContext.Provider value={{ lightMode, setLightMode }}>{children}</ThemeContext.Provider>;
};