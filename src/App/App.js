import React, { Component } from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../containers/AddCard";
import { connect } from "react-redux";
import { loadCardsAsync, loadUsers, loadStatuses } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: false,
    };

    this.newCardHandler = this.newCardHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadCardsAsync();
    this.props.loadUsers();
    this.props.loadStatuses();
  }

  newCardHandler() {
    this.setState({
      newCard: !this.state.newCard,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Kanban Board</h1>
          {!this.state.newCard ? (
            <button onClick={this.newCardHandler}>+ New Task</button>
          ) : null}
        </header>
        {this.state.newCard ? (
          <AddCard
            cards={this.props.allCards}
            users={this.props.users}
            newCardHandler={this.newCardHandler}
          />
        ) : null}
        {this.props.allCards && (
          <Board statuses={this.props.statuses} cards={this.props.allCards} />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allCards: state.cards,
    users: state.users,
    statuses: state.statuses,
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
    loadStatuses: () => {
      dispatch(loadStatuses());
    },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
