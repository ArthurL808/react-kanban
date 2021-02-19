import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = function ({ ...props }) {
  return (
    <Draggable draggableId={props.cardId.toString()} index={props.index}>
      {(provided) => (
        <div
          className="card"
          status={props.status}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className="title">{props.title}</h4>
          <p className="body">{props.body}</p>
          <p>Priority: {props.priority}</p>
          <p>Assigned by: {props.createdBy} </p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
