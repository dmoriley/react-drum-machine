import React, { useReducer } from 'react';
import { initialState } from '../index';

export const StoreContext = React.createContext<{
  state: typeof initialState;
  actions: any;
  dispatch: any;
}>({} as any);

interface IProps {
  children;
  settings: {
    initialState: typeof initialState;
    actions: any;
    reducer: (state, action) => typeof initialState;
  };
}

/**
 * Generic store component that will provide state management to the chilren passed to it.
 * It will provide the current state, available actions and a dispatch function to change the state.
 */
const StoreProvider: React.FC<IProps> = ({ children, settings }) => {
  const { initialState, actions, reducer } = settings;
  // setup the state and dispatch objects with the initial state and the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // return a context object that gives access to the state, actions and the reducer to change the state
  return (
    <StoreContext.Provider value={{ state, actions, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
