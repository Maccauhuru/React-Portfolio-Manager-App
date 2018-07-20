import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';
class AddPortfolio extends Component {
constructor(){
    super();
    this.state = {
        newProject :{
            id: uuid.v4(),
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
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
    return (
      <div>
        <h2>Add New Portfolio Project</h2>
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
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

 AddPortfolio.propTypes = {
   categories: PropTypes.array,
   handleSubmit: PropTypes.func,
   addPortfolio: PropTypes.func
 }

export default AddPortfolio;
