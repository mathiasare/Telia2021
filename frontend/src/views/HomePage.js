import React, { Component } from 'react';
import {useEffect,useState} from 'react'


class HomePage extends Component {
    
    constructor(props){
        super(props);
        this.state = {search:'',direction:''}
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
          [name]: value,
        });
      }

      //handleClicked(event){}
    
    //state = {  }
    render() { 
        return (  
            <div className="homePage">
                <div className="searchbox">
                    <label htmlFor="search">
                    <input type="text" name="search" onChange={this.handleChange}/>
                    </label>
                    <label htmlFor="direction">
                        <select name="direction" id="dir" onChange={this.handleChange}>
                            <option value="est-eng">Estonian --> English</option>
                            <option value="eng-est">English --> Estonian</option>
                        </select>
                    </label>
                    <button>Search</button>
                <h2>{this.state.search}</h2>
                <h2>{this.state.direction}</h2>
                </div>
               <Content/>
            </div>
        );
    }
}

function Content(){
    const [dictionaryEntries,setDictionaryEntries] = useState(null);
    const [queryString, setQueryString] = useState("");

    
        useEffect(()=>{
            console.log("ready");
            fetch("http://localhost:8080/api/all").then((response)=>response.json())
            .then((data)=>{
                console.log(data);
                setDictionaryEntries(data);
            })
        },[queryString]
    
        );
    
    

    return <div><ul>{dictionaryEntries ?  dictionaryEntries.map(
        (dictionaryEntry) => {
            return <li><div><p>{dictionaryEntry.estonian}</p> <p>{dictionaryEntry.english}</p></div></li>     
        }


    ): "Loading content..."}</ul></div>
}
 
export default HomePage;