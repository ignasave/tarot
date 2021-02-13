import React, {useState} from 'react';

const ThrowContext = React.createContext([{}, () => {}]);

const ThrowContextProvider = ({children}) => {
  const [state, setState] = useState({});
  return (
    <ThrowContext.Provider value={[state, setState]}>
      {children}
    </ThrowContext.Provider>
  );
}

export { ThrowContext, ThrowContextProvider };