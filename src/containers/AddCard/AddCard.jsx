import React, { Component } from "react";
import {addCard} from '../../actions'
import {connect} from 'react-redux'


export class AddCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: "",
      bodyInput: '',
      priorityInput: 'low',
      created_byInput: "",
      assigned_toInput: "",
      status:"InQueue"
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
  
  handleSubmit = () =>{
    const {titleInput:title, bodyInput:body,priorityInput:priority,created_byInput:createdBy,assigned_toInput:assignedTo,status:status} = this.state
    this.props.dispatch(addCard({title,body,priority,createdBy,assignedTo,status}))
    this.setState({
      titleInput: "",
      bodyInput: '',
      priorityInput: 'low',
      created_byInput: "",
      assigned_toInput: "",
      status:"InQueue"
    })
  }

  render() {
    return (
      <div className='AddCard'>
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
        <button onClick={this.handleSubmit}>Add Card</button>
      </div>
    );
  }
}
const mapStateToProps = (state) =>{
  return {
    allCards: state.cards
  }
}

AddCard = connect(mapStateToProps)(AddCard)

export default AddCard;
