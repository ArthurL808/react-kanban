import React, { Component } from "react";
import Column from "../Column";

class Board extends Component {
  constructor(props) {
    super(props);

    this.filtercards = this.filtercards.bind(this);
  }

  filtercards = (cards, status) => {
    return cards.filter((c) => {
      return c.status_id === status;
    });
  };

  render() {
    return (
      <div className="board">
        <Column
          columnName="inQueue"
          filterCards={this.filtercards(this.props.cards, 1)}
        />
        <Column
          columnName="inProgress"
          filterCards={this.filtercards(this.props.cards, 2)}
        />
        <Column
          columnName="done"
          filterCards={this.filtercards(this.props.cards, 3)}
        />
      </div>
    );
  }
}

export default Board;
