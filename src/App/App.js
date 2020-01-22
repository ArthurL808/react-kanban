import React ,{Component} from "react";
import "./App.css";
import Board from "../containers/Board";
import AddCard from "../containers/AddCard";
import {connect} from 'react-redux';
import {loadCardsAsync} from '../actions'

class App extends Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount(){
    this.props.loadCardsAsync()
  }

  addCard = ({title,body,priority,createdBy,assignedTo,status}) => {
    const cards = this.props.allCards.concat({title,body,priority,createdBy,assignedTo,status})
  this.setState({cards})
  }
  
  render(){
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      {this.props.allCards.length > 0 && <Board cards={this.props.allCards} />}
      

      {/* <AddCard addCard={this.addCard}/> */}
    </div>
  );
  }
}
const mapStateToProps = (state) =>{
  return {
    allCards: state.cards
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    loadCardsAsync: () =>{
      dispatch(loadCardsAsync())
    }
  }
}

App= connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
export default App;
