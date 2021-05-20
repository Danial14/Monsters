import logo from './logo.svg';
import './App.css';
import React from 'react';
import { CardList } from './coMponents/cardlist/cardlist.coMponent';
import { SearchBox } from './coMponents/search_box/search_box.coMponent';
import { Title } from './coMponents/title/title.coMponent'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      monsters: [
      ],
      search: ""
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").
    then(response => (response.json())).
    then(users => this.setState({monsters: users}))
  }
  render(){
    const {monsters, search} = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(search.toLowerCase())
    ))
    return(
      <div className="App">
        <Title title="Monsters rolodex"/>
        <SearchBox placeholder="Search monsters" handler={this.handleChange
        }/>
        <CardList monsters={filteredMonsters}/>
    </div>
    );
  }
  handleChange = (e) => {
    this.setState({search: e.target.value})
  }
}

export default App;
