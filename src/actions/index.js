export const ADD_CARD = "ADD_CARD";
export const LOAD_CARD = "LOAD_CARD";
export const LOAD_USER = "LOAD_USER";

export const addCard = (payload) => async (dispatch) => {
  await fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return dispatch({
        type: ADD_CARD,
        payload: data,
      });
    });
};

export const loadCardsAsync = () => async (dispatch) => {
  await fetch("/cards")
    .then((response) => {
      return response.json();
    })
    .then((cards) => {
      dispatch({
        type: LOAD_CARD,
        payload: cards,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loadUsers = () => (dispatch) => {
  fetch("/users")
    .then((response) => {
      return response.json();
    })
    .then((users) => {
      dispatch({
        type: LOAD_USER,
        payload: users,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
