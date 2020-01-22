export const ADD_CARD = "ADD_CARD";
export const LOAD_CARD = "LOAD_CARD";

export function addCard(payload) {
  return {
    type: ADD_CARD,
    payload
  };
}

export const loadCardsAsync = () => async dispatch => {
  fetch("/cards")
    .then(response => {
      return response.json();
    })
    .then(cards => {
      dispatch({
        type: LOAD_CARD,
        payload: cards
      });
    })
    .catch(err => {
      console.log(err);
    });
};
