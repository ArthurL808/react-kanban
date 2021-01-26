import React, { Component } from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../containers/AddCard";
import { connect } from "react-redux";
import { loadCardsAsync, loadUsers } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: false,
    };
  }

  componentDidMount() {
    this.props.loadCardsAsync();
    this.props.loadUsers();
  }

  //wtf is this? where am i adding the cards to? redux?
  // addCard = ({ title, body, priority, createdBy, assignedTo, status }) => {
  //   const cards = this.props.allCards.concat({
  //     title,
  //     body,
  //     priority,
  //     createdBy,
  //     assignedTo,
  //     status,
  //   });
  //   this.setState({ cards });
  // };

  render() {
    return (
      <div className="App">
        <header>
          <h1>Kanban Board</h1>
          {!this.state.newCard ? (
            <button
              onClick={() => {
                this.setState({ newCard: !this.state.newCard });
              }}
            >
              + New Task
            </button>
          ) : null}
        </header>
        {this.state.newCard ? (
          <AddCard cards={this.props.allCards} users={this.props.users} />
        ) : null}
        {this.props.allCards && <Board cards={this.props.allCards} />}
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
    loadCardsAsync: () => {
      dispatch(loadCardsAsync());
    },
    loadUsers: () => {
      dispatch(loadUsers());
    },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
