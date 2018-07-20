import React, { Component } from "react";

class AddPortfolio extends Component {
constructor(){
    super();
    this.state = {
        newProject :{
            title : '',
            category : ''
        }
    }
}
  static defaultProps = {
    categories: ["React Pet Projects", "React Business Projects", "React Books"]
  };

handleSubmit (e) {
if(!this.refs.title.value) alert("valid title required!");
this.setState({
    newProject :{
        title:this.refs.title.value,
        category:this.refs.category.value
    }
//Parent (App.js) to be updated with new state from this child component
},()=>{
    this.props.addPortfolio(this.state.newProject);
});
e.preventDefault();
  }


  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value="category">
          {category}
        </option>
      );
    });
    return (
      <div>
        <h3>Add New Portfolio Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddPortfolio;
