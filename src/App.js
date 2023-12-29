import React , { Component } from 'react';
import Cardlist from './components/card-list/card-list';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      SearchField:''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(users=>this.setState({monsters: users}));
  }

  onSearchChange =event =>{
    this.setState({SearchField: event.target.value});
  }


  render(){
    const {monsters,SearchField}=this.state;
    const filteredMonsters =monsters.filter(monster=>monster.name.toLowerCase().includes(SearchField.toLowerCase()));
    return(
      <div className='App'>

        <h1>Monster Rolodex</h1>
        
        <SearchBox  placeholder={'search monsters'} handleChange={this.onSearchChange}/>
        <Cardlist monsters={filteredMonsters} />
        
     
      
      </div>
    )
  }
}

export default App;
