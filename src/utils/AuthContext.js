import React,{createContext, useState } from "react";
import jwt_decode from 'jwt-decode'


export const AuthContext = createContext()
 function AuthProvider({children}){

    let [authTokens,setAuthTokens] 
   
   = useState(()=>localStorage.getItem('authTokenUser')? JSON.parse(localStorage.getItem('authTokenUser')):null)
   let [user,setUser] = useState(()=>localStorage.getItem('authTokenUser')?jwt_decode(localStorage.getItem('authTokenUser')):null)
    return(
        <AuthContext.Provider
            value={{authTokens,setAuthTokens,user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
 }
export default AuthProvider