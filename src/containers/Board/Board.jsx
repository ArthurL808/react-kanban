import React, { Component } from "react";
import Column from "../Column";
import { updateCardStatus } from "../../actions";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

class Board extends Component {
  constructor(props) {
    super(props);

    this.filtercards = this.filtercards.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(results) {
    this.props.updateCardStatus(results);
  }

  filtercards = (cards, status) => {
    return cards.filter((c) => {
      return c.status_id === status;
    });
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.props.statuses && (
          <div className="board">
            {this.props.statuses
              .sort((columnA, columnB) => {
                return columnA.rank - columnB.rank;
              })
              .map((status) => (
                <Column
                  key={status.id}
                  status={status}
                  filterCards={this.filtercards(this.props.cards, status.id)}
                />
              ))}
          </div>
        )}
      </DragDropContext>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCardStatus: (results) => {
      dispatch(updateCardStatus(results));
    },
  };
};

export default connect(null, mapDispatchToProps)(Board);
