import React, { Component } from "react";
import InQueue from "../InQueue";
import InProgress from "../InProgress/InProgress";
import Done from "../Done";



class Board extends Component {
  constructor(props) {
    super(props);
  }
  filtercards = (cards,status) =>{
  return cards.filter((c)=>{
  return c.status === status
  })
  }

  render() {
    return (
      <div className="board"> 
        <InQueue/>
        <InProgress/>
        <Done filterCards={this.filtercards(this.props.cards,'done')}/>
      </div>
    );
  }
}

export default Board;
