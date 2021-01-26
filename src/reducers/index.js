import { ADD_CARD, LOAD_CARD, LOAD_USER } from "../actions";

let initialState = {
  cards: [],
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const cards = state.cards.concat(action.payload);
      return cards;
    case LOAD_CARD:
      return { ...state, cards: action.payload };
    case LOAD_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default reducer;
