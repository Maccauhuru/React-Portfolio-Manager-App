import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItems extends Component {
    render() {
        return(
            <li>
            <strong>{this.props.todo.title}</strong> 
            </li>
        );
        }
    }

     TodoItems.propTypes = {
       todo : PropTypes.object
 }
   
    export default TodoItems;