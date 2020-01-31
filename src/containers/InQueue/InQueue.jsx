import React, { Component } from "react";
import Card from '../../components/Card'

export class InQueue extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }
  render() {
    return (
      <div className="inQueue">
        <h3>In Queue</h3>
        {this.props.filterCards.map(c=>{
                return <Card key={c.id} title={c.title} body={c.body} priority={c.priority.name} createdBy={c.created_by.first_name} />
                })}
      </div>
    );
  }
}

export default InQueue;
