import React, { Component } from 'react';
import PortfolioItems from './PortfolioItems';
import PropTypes from 'prop-types';

class Portfolio extends Component {
handleDeleteProject(id) {
    this.props.onDelete(id);
}

    render() {
        let portfolioItems;
        if(this.props.portfolio){
            portfolioItems = this.props.portfolio.map(item=>{
              return (<PortfolioItems key={item.title} item={item} onDelete={this.handleDeleteProject.bind(this)} />) 
            });
        }
        return(
            <div>
                <h3>Portfolio Projects {this.props.year}</h3>
                {portfolioItems}
                
            </div>
        );
        }
    }
 Portfolio.propTypes = {
       portfolio : PropTypes.array,
       onDelete  :  PropTypes.func,
 }

   
    export default Portfolio;