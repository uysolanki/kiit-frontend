import React from 'react'
import UserContext from './UserContext';

function UserContextProvider({children})
{

    let fruit="Apple";
    let car="Audi"


  return (
   <UserContext.Provider value={{fruit,car}}>
    {children}
   </UserContext.Provider>
  )
}

export default UserContextProvider