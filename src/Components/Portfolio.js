import React, { Component } from 'react';
import PortfolioItems from './PortfolioItems';

class Portfolio extends Component {
    render() {
        let portfolioItems;
        if(this.props.portfolio){
            portfolioItems = this.props.portfolio.map(item=>{
              return (<PortfolioItems key={item.title} item={item} />) 
            });
        }
        return(
            <div className='portfolio-list'>
                <h1>Portfolio Projects {this.props.year}</h1>
                {portfolioItems}
                
            </div>
        );
        }
    }
   
    export default Portfolio;