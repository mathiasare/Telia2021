
import './css/App.css';
import React from "react"



import NavBar from './components/NavBar'

class App extends React.Component{

  render(){
    return(
      <div className="app">
        <NavBar/>
      </div>
      
    )
  }
}


export default App;
