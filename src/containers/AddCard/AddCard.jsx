import React, { Component } from "react";
import {addCard} from '../../actions'
import {connect} from 'react-redux'

export class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      priorityInput: 'low',
      created_byInput: "",
      assigned_toInput: ""
    };
  }

  handleTitleInput = e => {
    const { value } = e.target;
    this.setState({ titleInput: value });
  };

  handleBodyInput = e =>{
    const {value}=e.target
    this.setState({bodyInput:value})
  }

  handlePriorityInput = e => {
    const { value } = e.target;
    this.setState({ priorityInput: value });
  };

  handleCreated_byInput = e => {
    const { value } = e.target;
    this.setState({ created_byInput: value });
  };

  handleAssigned_toInput = e => {
    const { value } = e.target;
    this.setState({ assigned_toInput: value });
  };

  render() {
    return (
      <div>
        <div>
          <input onChange= {this.handleTitleInput} type="text" value={this.state.titleInput} placeholder='Title'/>
        </div>
        <div>
          <input onChange={this.handleBodyInput} type="text" value={this.state.bodyInput}  placeholder="Body"/>
        </div>
        <div>
          Priority :
          <select onChange={this.handlePriorityInput} name="priorityInput">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <input onChange={this.handleCreated_byInput} type="text" value={this.state.created_byInput} placeholder='Created By' />
        </div>
        <div>
          <input onChange={this.handleAssigned_toInput} type="text" value={this.state.assigned_toInput} placeholder='Assigned To' />
        </div>
      </div>
    );
  }
}

export default AddCard;
