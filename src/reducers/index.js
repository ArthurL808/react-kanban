import {
  ADD_CARD,
  LOAD_CARD,
  LOAD_STATUSES,
  LOAD_USER,
  UPDATE_STATUS,
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
    case LOAD_CARD:
      return { ...state, cards: action.payload };
    case LOAD_USER:
      return { ...state, users: action.payload };
    case LOAD_STATUSES:
      return { ...state, statuses: action.payload };
    default:
      return state;
  }
};

export default reducer;
