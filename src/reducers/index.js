import { ADD_CARD, LOAD_CARD } from "../actions";

const defaultState = {
  cards: [{id:1,
    title:'test',
    body:'this is a test',
    priority:'low',
    status:'done',
    createdBy:'Arthur',
    assignedTo:'Arthur'},{id:2,
      title:'test',
      body:'this is a test',
      priority:'low',
      status:'InProgress',
      createdBy:'ED',
      assignedTo:'Arthur'},{id:3,
        title:'test',
        body:'this is a test',
        priority:'low',
        status:'InQueue',
        createdBy:'MEL',
        assignedTo:'Arthur'}]
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const cards = state.cards.concat(action.payload);
      return { cards };
    case LOAD_CARD:
      return this.state.cards;
    default:
      return state;
  }
};

export default reducer;
