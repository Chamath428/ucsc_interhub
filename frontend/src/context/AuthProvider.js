import React,{useState,useContext } from "react";
const AuthContext = React.createContext({});

export function GetAuth(){
    debugger
    return useContext(AuthContext);
}

export function AuthProvider ({ children }) {
    const [auth, setAuth] = useState({});

    function setAuthParas(param){
        setAuth(param);
    }

    return (
        <AuthContext.Provider value={setAuthParas}>
            {children}
        </AuthContext.Provider>
    )
}
