export const ADD_CARD = "ADD_CARD";
export const LOAD_CARD = "LOAD_CARD";
export const LOAD_USER = "LOAD_USER";
export const LOAD_STATUSES = "LOAD_STATUSES";
export const UPDATE_CARD_STATUS = "UPDATE_CARD_STATUS";

//Create
export const addCard = (payload) => (dispatch) => {
  fetch("/cards", {
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
    })
    .catch((err) => {
      console.log(err);
    });
};
//READ
export const loadCardsAsync = () => (dispatch) => {
  fetch("/cards")
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

export const loadStatuses = () => (dispatch) => {
  fetch("/statuses")
    .then((response) => {
      return response.json();
    })
    .then((statuses) => {
      dispatch({
        type: LOAD_STATUSES,
        payload: statuses,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
//Update
export const updateCardStatus = (results) => (dispatch) => {
  fetch("/cards/updateStatus", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(results),
  })
    .then((response) => {
      return response.json();
    })
    .then((updatedCard) => {
      dispatch({
        type: UPDATE_CARD_STATUS,
        payload: updatedCard,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
//Delete
