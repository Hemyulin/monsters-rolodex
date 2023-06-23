import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.component';
class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
      response.json().then((users) =>
        this.setState(() => {
          return { monsters: users }
        }),
      ),
    )
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(() => {
      return { searchField };
    })
  }

  render() {
    console.log('render')

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="monsters-search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {/* {filteredMonsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })} */}
        <CardList/>
      </div>
    )
  }
}

export default App;
