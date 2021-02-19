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
      let updatedStatuses = action.payload.map((status) => {
        let expandedCardsData = status.cards.map((card) => {
          for (let stateCard of state.cards) {
            if (stateCard.id === card.id) {
              return stateCard;
            }
          }
          return card;
        });
        return { ...status, cards: expandedCardsData };
      });
      return { ...state, statuses: updatedStatuses };
    case UPDATE_CARD_STATUS:
      const { payload, position } = action;
      const column = state.statuses.map((status) => {
        if (
          position.source.droppableId === position.destination.droppableId &&
          position.source.droppableId === status.id.toString()
        ) {
          let newStatusCardsArr = status.cards.slice();
          newStatusCardsArr.splice(position.source.index, 1);
          newStatusCardsArr.splice(position.destination.index, 0, payload);
          return { ...status, cards: newStatusCardsArr };
        }
        if (
          position.source.droppableId !== position.destination.droppableId &&
          position.source.droppableId === status.id.toString()
        ) {
          let removeCardArr = status.cards.slice();
          removeCardArr.splice(position.source.index, 1);
          return { ...status, cards: removeCardArr };
        } else if (
          position.source.droppableId !== position.destination.droppableId &&
          position.destination.droppableId === status.id.toString()
        ) {
          let addCardArr = status.cards.slice();
          addCardArr.splice(position.destination.index, 0, payload);

          return { ...status, cards: addCardArr };
        }
        return status;
      });
      // console.log(column);
      // let updatedCardlist = state.cards.map((card) => {
      //   if (card.id === action.payload.id) {
      //     return action.payload;
      //   }
      //   return card;
      // });
      return { ...state, statuses: column };
    default:
      return state;
  }
};

export default reducer;
