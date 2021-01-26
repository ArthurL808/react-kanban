import React from 'react'

const Card = function ({...props}) {
    return (
        <div className='card'>
            <h4 className='title'>{props.title}</h4>
            <p className='body'>{props.body}</p>
            <p>Priority: {props.priority}</p>
            <p>Assigned by: {props.createdBy} </p>
            <button>Edit</button>
            <button>Delete</button>
            <button>Previous</button>
            <button>Next</button>
        </div>
    )
}

export default Card