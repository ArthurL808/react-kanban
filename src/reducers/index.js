import { ADD_CARD, LOAD_CARD } from "../actions";


const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      const cards = state.cards.concat(action.payload);
      return { cards };
    case LOAD_CARD:
      return {...state, cards: action.payload};
    default:
      return state;
  }
};

export default reducer;
