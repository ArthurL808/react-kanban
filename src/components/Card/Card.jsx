import React from "react";
import styles from "./Card.module.scss";
import { Draggable } from "react-beautiful-dnd";

const Card = function ({ ...props }) {
  return (
    <Draggable draggableId={props.cardId.toString()} index={props.index}>
      {(provided) => (
        <div
          className={styles.cardContainer}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <h4 className={styles.title}>{props.title}</h4>
          <p className={styles.bodyText}>{props.body}</p>
          <div className={styles.assignmentContainer}>
            <p className={styles.assignedBy}>Assigned by: {props.createdBy} </p>
            <div className={styles.priorityImg}>
              <p className={styles.priority}>Priority: {props.priority}</p>
            </div>

            <p className={styles.assignedTo}>Assigned To: {props.assignedTo} </p>
          </div>
          {/* <button>Edit</button>
          <button>Delete</button> */}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
