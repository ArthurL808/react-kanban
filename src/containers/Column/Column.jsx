import React, { Component } from "react";
import Card from "../../components/Card";
import styles from "./Column.module.scss";
import { Droppable } from "react-beautiful-dnd";

export class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.column}>
        <h3>{this.props.status.name}</h3>
        <Droppable droppableId={this.props.status.id.toString()}>
          {(provided) => (
            <div
              className={styles.columnDrop}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {this.props.status.cards.map((card, index) => {
                return (
                  <Card
                    key={card.id}
                    cardId={card.id}
                    title={card.title}
                    body={card.body}
                    createdBy={card.created_by.first_name}
                    assignedTo={card.assigned_to.first_name}
                    priority={card.priority.name}
                    status={card.status}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}

export default Column;
