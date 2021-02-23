import React, { Component } from "react";
import Column from "../Column";
import styles from "./Board.module.scss";
import { updateCardStatus } from "../../actions";
import { DragDropContext } from "react-beautiful-dnd";
import { connect } from "react-redux";

class Board extends Component {
  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(results) {
    console.log(results);
    const { destination, source, draggableId } = results;

    if (!destination) {
      return;
    }
    if (
      destination.draggableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.props.updateCardStatus(results);
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.props.statuses && (
          <div className={styles.board}>
            {this.props.statuses
              .sort((columnA, columnB) => {
                return columnA.rank - columnB.rank;
              })
              .map((status) => (
                <Column key={status.id} status={status} />
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
