import React from 'react'

const Card = function () {
    
    return (
        <div className='card'>
            <h4 className='title'>Test card</h4>
            <p className='body'>this is a test card</p>
            <p>Priority: low </p>
            <p>Assigned by: Arthur </p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Card