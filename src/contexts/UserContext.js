import { createContext, useState, useContext } from 'react';

const initialState = {
  id: '',
  name: '',
  email: '',
  phone: '',
  isAuth: false
}

const UserContext = createContext(initialState);

export const UserContextStore = (props) => {

  const [user, setUser] = useState(initialState);

  const setAuth = (isAuthe) => {
    setUser({...user, isAuth: isAuthe})
  }

  const setUserInfo = (userdata) => {
    console.log(userdata);
    setUser((prevState) => ({...prevState, user: prevState.user, ...userdata }))
  }

  return (
    <UserContext.Provider value={{ user, setAuth, setUserInfo }}>
      {props.children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext);
