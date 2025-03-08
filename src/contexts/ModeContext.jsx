import { createContext, useState, useContext} from "react";

const ModeContext = createContext();

export const ModeProvider = ({children}) => {
    const[mode, setMode] = useState("dark");
    const handleModeChange = () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    }

    return(
    <ModeContext.Provider value={{mode, handleModeChange}}>
        {children}
    </ModeContext.Provider>
    )

};
export const useMode = () => useContext(ModeContext);
export default ModeContext