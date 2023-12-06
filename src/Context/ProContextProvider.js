import React from 'react'
import UserContext from './UserContext';
import { useState } from 'react';

const ProContextProvider = (props) => {


const [theme , Settheme ] = useState("autumn")



  return (
    <UserContext.Provider value={{  theme , Settheme }}>
      {props.children}
    </UserContext.Provider>
  )
}
export default ProContextProvider
 