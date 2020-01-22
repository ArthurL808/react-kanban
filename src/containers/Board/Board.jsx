import React, { Component } from "react";
import InQueue from "../InQueue";
import InProgress from "../InProgress/InProgress";
import Done from "../Done";



class Board extends Component {
  constructor(props) {
    super(props);

    this.filtercards = this.filtercards.bind(this)
  }

  filtercards = (cards,status) =>{
    console.log(cards)
  return cards.filter((c)=>{
  return c.status_id === status
  })
  }

  render() {
    return (
      <div className="board"> 
        <InQueue filterCards={this.filtercards(this.props.cards,1)}/>
        {/* <InProgress filterCards={this.filtercards(this.props.cards,2)}/> */}
        {/* <Done filterCards={this.filtercards(this.props.cards,3)}/> */}
      </div>
    );
  }
}

export default Board;
