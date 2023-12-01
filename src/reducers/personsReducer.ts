import type { IState, IAction } from '../AppContext';

const personsReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'UPDATE_PERSONS':
      return {
        ...state,
        persons: [
          ...action.newPersons
        ]
      };
    default:
      return state;
  }
};

export default personsReducer;