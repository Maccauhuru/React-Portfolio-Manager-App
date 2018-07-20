import React, { Component } from 'react';

class PortfolioItems extends Component {
    render() {
        return(
            <li>
            <strong>{this.props.item.title}</strong> - {this.props.item.category}
            </li>
        );
        }
    }
   
    export default PortfolioItems;