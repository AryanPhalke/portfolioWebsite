import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContest";

export const useTheme = () =>{
    const context = useContext(ThemeContext);
    if(!context) throw new Error('Theme is not provided');
    return context;
}