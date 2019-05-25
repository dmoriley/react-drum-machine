import React, { useReducer } from 'react';
import reducer from '../state-management/reducer';
import actions from '../state-management/actions';

export const StoreContext = React.createContext();

export default ({children, initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // return a context object that gives access to the state, actions and the reducer to change the state
  return (
    <StoreContext.Provider value={{state, actions, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

// https://www.jbillmann.com/using-react-hooks-to-manage-and-organize-application-state/