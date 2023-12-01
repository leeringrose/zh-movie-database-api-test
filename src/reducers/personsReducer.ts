import { IContextState } from '../shared/types';

const personsReducer = (state: IContextState, action: any) => {
  switch (action.type) {
    case 'APPEND_PERSONS':
      return {
        ...state,
        persons: [
          ...state.persons,
          ...action.newPersons
        ]
      };
    default:
      return state;
  }
};

export default personsReducer;