import React, { Component } from 'react';
import Portfolio from './Components/Portfolio';
import AddPortfolio from './Components/AddPortfolio';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: []
    }
  }

  componentWillMount(){
  this.setState({
          portfolio: [{
              title: 'TwittRR App',
              category: 'React Pet Projects'
            },
            {
              title: 'L4D App',
              category: 'React Business Projects'

            },
            {
              title: 'Pure React Book',
              category: 'React Books'
            }
          ]
  })  
  }

  handleAddPortfolio(project){
    console.log(project);
    // this.setState({
    //   portfolio: [this.state.portfolio.push(newProject)]
    // })
  }

  render() {

    return (<div className = "App">
      <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)}/>
      <Portfolio year = '2018' portfolio={this.state.portfolio}/>

      </div>
    );
  }
}

export default App;