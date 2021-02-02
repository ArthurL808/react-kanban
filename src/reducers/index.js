import {
  ADD_CARD,
  ADD_STATUS,
  LOAD_CARD,
  LOAD_STATUSES,
  LOAD_USER,
  UPDATE_CARD_STATUS,
  // UPDATE_STATUS,
} from "../actions";

let initialState = {
  cards: [],
  users: [],
  statuses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case ADD_STATUS:
      return { ...state, statuses: [...state.statuses, action.payload] };
    case LOAD_CARD:
      return { ...state, cards: action.payload };
    case LOAD_USER:
      return { ...state, users: action.payload };
    case LOAD_STATUSES:
      return { ...state, statuses: action.payload };
    case UPDATE_CARD_STATUS:
      let updatedCardlist = state.cards.map((card) => {
        if (card.id === action.payload.id) {
          return action.payload;
        }
        return card;
      });
      return { ...state, cards: updatedCardlist };
    default:
      return state;
  }
};

export default reducer;
