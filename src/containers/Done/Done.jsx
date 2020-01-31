import React, { Component } from 'react'
import Card from '../../components/Card'

export class Done extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='done'>
                <h3>Done</h3>
                {this.props.filterCards.map(c=>{
                return <Card key={c.id} title={c.title} body={c.body} priority={c.priority.name} createdBy={c.created_by.first_name} />
                })}
            </div>
        )
    }
}

export default Done
