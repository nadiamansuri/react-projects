import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            removeAlert();
        }, 3000)
        return () => clearTimeout(timeout);
    }, [list]);
return <p className={`alert alert-${type}`}>{msg}</p>;
//  ^ BASED ON THE ALERT IT WILL USE THE STYLING OF SUCCESS OR DANGER, TOGGLE STYLING!! PRETTY COOL
  
};

export default Alert;
