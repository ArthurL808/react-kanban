import React, { Component } from "react";
import InQueue from "../InQueue";
import InProgress from "../InProgress/InProgress";
import Done from '../Done'

class Board extends Component {
  render() {
    return (
      <div className="board">
        <InQueue />
        <InProgress />
        <Done/>
      </div>
    );
  }
}

export default Board;
