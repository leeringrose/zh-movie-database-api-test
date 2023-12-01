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
    case 'ADD_LIST':
      if (state.chosens.includes(action.newPerson)) {
        return state;
      } else {
        // eslint-disable-next-line no-console
        console.log(state.chosens, action.newPerson);
        return {
          ...state,
          chosens: [
            ...state.chosens,
            action.newPerson
          ]
        };
      }
    default:
      return state;
  }
};

export default personsReducer;