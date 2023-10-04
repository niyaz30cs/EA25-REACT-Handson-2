import React, { Component } from 'react'
import "../App.css";

class FormCompo extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Department: "",
      Rating: "",
      StuData: []
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const tempObj = {
      Name: this.state.Name,
      Department: this.state.Department,
      Rating: this.state.Rating
    }

    this.state.StuData.push(tempObj);
    this.setState({ 
      StuData: this.state.StuData,
      Name: "",
      Department: "",
      Rating: "",
     })
    console.log(this.state.StuData);

  }

  render() {
    return (
      <>
        <div>
          <form className='form'>
            <div className='inputArea'>
            <label htmlFor='name' ><span>Name</span>:</label>
            <input type='text' id='name' name='Name' className='input' placeholder='Enter Your Name' value={this.state.Name} onChange={this.handleChange} />
            </div>
            <div className='inputArea'>
            <label htmlFor='department' ><span>Department</span>:</label>
            <input type='text' id='department' name='Department' className='input' placeholder='Enter Your Department' value={this.state.Department} onChange={this.handleChange} />
            </div>
            <div className='inputArea'>
            <label htmlFor='rating' ><span>Rating</span>:</label>
            <input type='number' id='rating' name='Rating' className='input' placeholder='Enter Your Rating' value={this.state.Rating} onChange={this.handleChange} />
            </div>
            <button onClick={this.handleSubmit} className='btn'>Submit</button>
          </form>
        </div>
        
        <div className="array">
        {this.state.StuData.map((item,index)=>{
            return (
              <h3 key={index} className="box">Name:{item.Name} | Department:{item.Department} | Rating:{item.Rating}</h3>
            )
        })}
        </div>
      </>
    )
  }
}
export default FormCompo;
