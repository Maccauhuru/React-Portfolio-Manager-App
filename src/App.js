import React, { Component } from 'react';
import Portfolio from './Components/Portfolio';
import AddPortfolio from './Components/AddPortfolio';
import uuid from 'uuid/v4';
import $ from 'jquery';
import './App.css';
import Todos from './Components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolio: [],
      todos: []
    }
  }

getTodos (){
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos',
  dataType : 'json',
  cache : false,
  success : function(data){
    this.setState({todos : data},function(){console.log(this.state);})
  }.bind(this),
  error : function(xhr,status,err){
    console.log(err);
  }

})
}
getProjects(){
this.setState({
  portfolio: [{
      id: uuid.v4(),
      title: 'TwittRR App',
      category: 'React Pet Projects'
    },
    {
      id: uuid.v4(),
      title: 'L4D App',
      category: 'React Business Projects'

    },
    {
      id: uuid.v4(),
      title: 'Pure React Book',
      category: 'React Books'
    }
  ]
});
}

  componentWillMount(){
  this.getProjects();  
  this.getTodos();
  }

componentDidMount(){
this.getTodos();
}


  handleAddPortfolio(project){
  let projects = this.state.portfolio;
  projects.push(project);
  this.setState({
    projects : projects
  });
  };

  handleDeleteProject(id) {
    let projects = this.state.portfolio;
    let index = projects.findIndex(el => el.id === id);
    projects.splice(index,1);
    this.setState({
      projects: projects
    });
  }

  render() {

    return (<div className = "App">
      <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)}/>
      <Portfolio year = '2018' portfolio={this.state.portfolio} onDelete={this.handleDeleteProject.bind(this)}/>
      <hr />
      <Todos todos={this.state.todos}/>

      </div>
    );
  }
}

export default App;