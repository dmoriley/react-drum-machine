import React, { useReducer } from 'react';
import PropTypes from "prop-types";

export const StoreContext = React.createContext();

/**
 * Generic store component that will provide state management to the chilren passed to it.
 * It will provide the current state, available actions and a dispatch function to change the state.
 */
const StoreProvider = ({children, settings}) => {
  const {initialState, actions, reducer} = settings;
  // setup the state and dispatch objects with the initial state and the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  // return a context object that gives access to the state, actions and the reducer to change the state
  return (
    <StoreContext.Provider value={{state, actions, dispatch}}>
      {children}
    </StoreContext.Provider>
  );
};

StoreProvider.propTypes = {
  /** Settings to setup the store. Include the required initialState, actions and reducer. */
  settings: PropTypes.shape({
    /** The initial state of the store */
    initialState: PropTypes.object.isRequired,
    /** The actions available for dispatch */
    actions: PropTypes.object.isRequired,
    /** The reducer that will process the actions passed to the dispatch */
    reducer: PropTypes.func.isRequired
  }).isRequired
};

export default StoreProvider;

// https://www.jbillmann.com/using-react-hooks-to-manage-and-organize-application-state/