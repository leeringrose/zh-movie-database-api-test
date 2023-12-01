import React, { Dispatch, createContext, useReducer } from 'react';

import { IPerson } from './shared/types';
import { personsReducer } from './reducers';

// Define types for the state and actions
export type IState = {
  persons: Array<IPerson>
  chosens: Array<IPerson>
}
export type IAction =
  | { type: 'UPDATE_PERSONS', newPersons: Array<IPerson> }
  | { type: 'ADD_LIST', newPerson: IPerson }

// Initial State
const initialState: IState = {
  persons: [],
  chosens: []
};

// Create an AppContext
const AppContext = createContext<{ state: IState, dispatch: Dispatch<IAction> }>({
  state: initialState,
  dispatch: () => null
});

// Context Provider Component
const ContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(personsReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { ContextProvider, AppContext };