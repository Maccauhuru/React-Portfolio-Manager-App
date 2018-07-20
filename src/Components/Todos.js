import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';

class Todos extends Component {
    render() {
        let todoItems;
        if(this.props.todos){
            todoItems = this.props.todos.map(todo=>{
              return (<TodoItems key={todo.title} todo={todo} />) 
            });
        }
        return(
            <div>
                <h3>Todo List {this.props.year}</h3>
                {todoItems}
            </div>
        );
    }
        }
    
 Todos.propTypes = {
       todos : PropTypes.array,
 }

export default Todos;