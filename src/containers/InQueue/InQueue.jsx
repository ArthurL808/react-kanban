import React, { Component } from "react";
import Card from '../../components/Card'

export class InQueue extends Component {
  render() {
    return (
      <div className="inQueue">
        <h3>In Queue</h3>
        {this.props.filterCards.map(c=>{
                return <Card title={c.title}body={c.body} status={c.status} priority={c.priority}
                createdBy={c.createdBy}/>
                })}
      </div>
    );
  }
}

export default InQueue;
