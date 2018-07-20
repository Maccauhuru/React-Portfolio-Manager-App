import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PortfolioItems extends Component {
handleDeleteProject(id){
    this.props.onDelete(id);
}

    render() {
        return(
            <li>
            <strong>{this.props.item.title}</strong> - {this.props.item.category}<a href="#" onClick={this.handleDeleteProject.bind(this,this.props.item.id)}>X</a>
            </li>
        );
        }
    }

     PortfolioItems.propTypes = {
       item : PropTypes.object,
       onDelete  :  PropTypes.func,
 }
   
    export default PortfolioItems;