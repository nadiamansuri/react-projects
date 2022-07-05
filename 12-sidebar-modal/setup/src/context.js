import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
    return <AppContext.Provider value='hello'>
        {children}
    </AppContext.Provider>

    
    }
    // CUSTOM HOOK ---- IF YOU WANT TO USE REACT HOOK YOU HAVE TO EITHER NEEDS TO BE A COMPONENT OR A CUSTOM HOOK AND CUSTOM HOOK IS ALWAYS USED WITH "USE......"
    export const useGlobalContext = () =>{
        return useContext(AppContext)

}

export {AppContext, AppProvider}