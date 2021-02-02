import React, { Component } from "react";
import { addCard } from "../../actions";
import { connect } from "react-redux";

export class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      priorityInput: 1,
      bodyInput: "",
      created_byInput: { first_name: "", last_name: "" },
      assigned_toInput: { first_name: "", last_name: "" },
    };
  }

  handleTitleInput = (e) => {
    const { value } = e.target;
    this.setState({ titleInput: value });
  };

  handleBodyInput = (e) => {
    this.setState({ bodyInput: e.target.value });
  };

  handlePriorityInput = (e) => {
    const { value } = e.target;
    this.setState({ priorityInput: value });
  };

  handleCreated_byInput = (e) => {
    const { value } = e.target;
    let names = value.split(", ");

    this.setState((prevState) => ({
      created_byInput: {
        ...prevState.created_byInput,
        first_name: names[0],
        last_name: names[1],
      },
    }));
  };

  handleAssigned_toInput = (e) => {
    const { value } = e.target;
    let names = value.split(", ");

    this.setState((prevState) => ({
      assigned_toInput: {
        ...prevState.assigned_toInput,
        first_name: names[0],
        last_name: names[1],
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCard(this.state);
    this.props.newCardHandler();
  };

  render() {
    return (
      <div className="AddCard">
        <div>
          Title:
          <input
            onChange={this.handleTitleInput}
            type="text"
            value={this.state.titleInput}
            placeholder="Title"
          />
        </div>
        <div>
          Task Details:
          <textarea
            name="bodyInput"
            id="bodyInput"
            onChange={this.handleBodyInput}
            cols="20"
            placeholder="Task description"
            rows="10"
          ></textarea>
        </div>
        <div>
          Priority :
          <select onChange={this.handlePriorityInput} name="priorityInput">
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
        <select name="created_by" onChange={this.handleCreated_byInput}>
          <option value="">Select user</option>
          {this.props.users.map((user) => {
            return (
              <option key={user.id}>
                {user.first_name}, {user.last_name}
              </option>
            );
          })}
        </select>

        <select name="assigned_to" onChange={this.handleAssigned_toInput}>
          <option value="">Select user</option>
          {this.props.users.map((user) => {
            return (
              <option key={user.id}>
                {user.first_name}, {user.last_name}
              </option>
            );
          })}
        </select>

        <button onClick={this.handleSubmit}>Add Card</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (payload) => {
      dispatch(addCard(payload));
    },
  };
};

AddCard = connect(null, mapDispatchToProps)(AddCard);

export default AddCard;
