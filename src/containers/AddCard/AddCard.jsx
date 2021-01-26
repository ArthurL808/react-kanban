import React, { Component } from "react";
import { addCard, loadUsers } from "../../actions";
import { connect } from "react-redux";

export class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      priorityInput: 1,
      created_byInput: { first_name: "", last_name: "" },
      assigned_toInput: { first_name: "", last_name: "" },
    };
  }

  componentDidMount() {
    this.props.loadUsers();
  }

  handleTitleInput = (e) => {
    const { value } = e.target;
    this.setState({ titleInput: value });
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
  };

  render() {
    return (
      <div className="AddCard">
        <div>
          <input
            onChange={this.handleTitleInput}
            type="text"
            value={this.state.titleInput}
            placeholder="Title"
          />
        </div>
        <div>
          Priority :
          <select onChange={this.handlePriorityInput} name="priorityInput">
            <option value={1}>Low</option>
            <option value={2}>Medium</option>
            <option value={3}>High</option>
          </select>
        </div>
        <input
          list="created_by"
          onChange={this.handleCreated_byInput}
          placeholder="Created_by"
        />
        <datalist id="created_by">
          {this.props.users.map((user) => {
            return (
              <option key={user.id}>
                {user.first_name}, {user.last_name}
              </option>
            );
          })}
        </datalist>

        <input
          list="assigned_to"
          onChange={this.handleAssigned_toInput}
          placeholder="Assigned_to"
        />
        <datalist id="assigned_to">
          {this.props.users.map((user) => {
            return (
              <option key={user.id}>
                {user.first_name}, {user.last_name}
              </option>
            );
          })}
        </datalist>

        <button onClick={this.handleSubmit}>Add Card</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allCards: state.cards,
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadUsers: () => {
      dispatch(loadUsers());
    },
    addCard: (payload) => {
      dispatch(addCard(payload));
    },
  };
};

AddCard = connect(mapStateToProps, mapDispatchToProps)(AddCard);

export default AddCard;
