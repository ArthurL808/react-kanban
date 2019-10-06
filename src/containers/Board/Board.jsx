import React, { Component } from "react";
import InQueue from "../InQueue";
import InProgress from "../InProgress/InProgress";
import Done from "../Done";
import Card from '../../components/Card'


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="board"> 
        <InQueue/>
        <InProgress/>
        <Done/>
      </div>
    );
  }
}

export default Board;
