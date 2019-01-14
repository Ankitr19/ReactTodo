import React from 'react';
import './todoitem.css';

export default class todoItem extends React.Component{
	constructor(props){
		super(props);
	}
	removeTodo(id){
		this.props.removeTodo(id);
	}
	render(){
		return(
			<div className="todowrapper">
				<button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>{this.props.todo.text}
			</div>
		)
	}
}