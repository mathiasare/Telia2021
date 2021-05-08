import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { estonian: "", english: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault()
    console.log("Estonian: " + this.state.estonian + " English:  " + this.state.english);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ estonian: this.state.estonian, english:this.state.english })
    };

   const response = await fetch("http://localhost:8080/api/create",options);
   console.log(response);
    
  }
  render() {
    return (
    

    
    <div className="entryForm">
<form onSubmit={this.handleSubmit} method="post">
        <label htmlFor="estonian">
          Estonian:
          <input name="estonian" type="text" className="formInput" onChange={this.handleChange} />
        </label>

        <label htmlFor="english">
            English:
            <input name="english" type="text" className="formInput" onChange={this.handleChange}/>
        </label>

        <input type="submit" value="Submit" />
      </form>

      <h1>{this.state.estonian}</h1>
      <h1>{this.state.english}</h1>
    </div>
      
    );
  }
}

export default Form;
