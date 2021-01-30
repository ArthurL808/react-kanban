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
              {this.props.filterCards.map((c, index) => {
                return (
                  <Card
                    key={c.id}
                    cardId={c.id}
                    title={c.title}
                    body={c.body}
                    priority={c.priority.name}
                    createdBy={c.created_by.first_name}
                    status={c.status}
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
