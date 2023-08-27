import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialValue, children }) => {
  return (<StateContext.Provider value={useReducer(reducer, initialValue)}>
    {children}
  </StateContext.Provider>)
};

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);