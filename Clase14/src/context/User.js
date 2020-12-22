import React, {useContext, useState} from 'react';

export const UserContext = React.createContext();

const UserHandler = ({children}) => {
  const [name, updateName] = useState('');
  const [email, updateEmail] = useState('');
  const [photo, updatePhoto] = useState(null);

  return (
    <UserContext.Provider
      value={{
        name,
        updateName,
        email,
        updateEmail,
        photo,
        updatePhoto,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserHandler;

type IUser = {
  name?: String,
  updateName?: Function,
  email?: String,
  updateEmail?: Function,
  photo?: String,
  updatePhoto?: Function,
};

export const useUserInformation = (): IUser => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserInformation debe ser usado dentro de UserHandler');
  }

  return context;
};
