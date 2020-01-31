import React, { Component } from 'react'
import Card from '../../components/Card'

export class InProgress extends Component {
    render() {
        return (
            <div className="inProgress">
                <h3>In Progress</h3>
                {this.props.filterCards.map(c=>{
                return <Card key={c.id} title={c.title} body={c.body} priority={c.priority.name} createdBy={c.created_by.first_name} />
                })}
            </div>
        )
    }
}

export default InProgress
