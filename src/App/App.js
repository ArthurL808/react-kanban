import React, { Component } from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../containers/AddCard";
import { connect } from "react-redux";
import { loadCardsAsync } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newCard: false,
    };
  }

  componentDidMount() {
    this.props.loadCardsAsync();
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
          <button
            onClick={() => {
              this.setState({ newCard: !this.state.newCard });
            }}
          >
            + New Task
          </button>
        </header>
        {this.state.newCard ? <AddCard /> : null}
        <Board cards={this.props.allCards} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    allCards: state.cards,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loadCardsAsync: () => {
      dispatch(loadCardsAsync());
    },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
