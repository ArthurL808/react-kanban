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
                return <Card title={c.title}body={c.body} status={c.status} priority={c.priority}
                createdBy={c.createdBy}/>
                })}
            </div>
        )
    }
}

export default Done
