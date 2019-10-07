import React, { Component } from 'react'
import Card from '../../components/Card'

export class InProgress extends Component {
    render() {
        return (
            <div className="inProgress">
                <h3>In Progress</h3>
                {this.props.filterCards.map(c=>{
                return <Card title={c.title}body={c.body} status={c.status} priority={c.priority}
                createdBy={c.createdBy}/>
                })}
            </div>
        )
    }
}

export default InProgress
