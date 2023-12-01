import React, { createContext, useReducer } from 'react';

import { IContextState } from './shared/types';
import { personsReducer } from './reducers';

const initialState: IContextState = {
  persons: [],
  currentPage: 1,
};

interface IContextProvider {
  state: IContextState
  dispatch: React.Dispatch<any>
}

const AppContext = createContext<IContextProvider | undefined>(undefined);

const ContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const [state, dispatch] = useReducer(personsReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;