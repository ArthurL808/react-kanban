import React ,{Component} from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../containers/AddCard";
import {connect} from 'react-redux';
import {loadCards} from '../actions'

class App extends Component {
  constructor(props){
    super(props)
  }

  addCard = ({title,priority,createdBy,assignedTo}) => {
    const cards = this.props.cards.concat({title,priority,createdBy,assignedTo})

  this.setState({cards})
  }
  render(){
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Board card={this.props.cards} />
      <AddCard addCard={this.addCard}/>
    </div>
  );
  }
}
const mapStateToProps = (state) =>{
  return {
    cards: state.cards
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    loadCards: () =>{
      return dispatch(loadCards())
    }
  }
}

App= connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default App;
