import React, { Component } from "react";
import Card from "../../components/Card";
import { Droppable } from "react-beautiful-dnd";

export class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.status.name}>
        <h3>{this.props.status.name}</h3>
        <Droppable droppableId={this.props.status.id.toString()}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {this.props.filterCards.map((card, index) => {
                return (
                  <Card
                    key={card.id}
                    cardId={card.id}
                    title={card.title}
                    body={card.body}
                    priority={card.priority.name}
                    createdBy={card.created_by.first_name}
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
