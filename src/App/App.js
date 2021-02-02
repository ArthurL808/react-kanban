import React, { Component } from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../components/AddCard";
import AddColumn from "../components/AddColumn";
import { connect } from "react-redux";
import { loadCardsAsync, loadUsers, loadStatuses } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: false,
      newColumn: false,
    };

    this.newCardHandler = this.newCardHandler.bind(this);
    this.newColumnHandler = this.newColumnHandler.bind(this);
  }

  componentDidMount() {
    this.props.loadCardsAsync();
    this.props.loadUsers();
    this.props.loadStatuses();
  }

  newColumnHandler() {
    this.setState({
      newColumn: !this.state.newColumn,
    });
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
          ) : (
            <AddCard
              cards={this.props.allCards}
              users={this.props.users}
              newCardHandler={this.newCardHandler}
            />
          )}
          {!this.state.newColumn ? (
            <button onClick={this.newColumnHandler}>+ New Column</button>
          ) : (
            <AddColumn newColumnHandler={this.newColumnHandler} />
          )}
        </header>

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
