import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';
import './components/card-list/card-list.component';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);

useEffect(() => {}, [])

  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users)
    );

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchField)
  };
  
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
  });

  return(
    <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>

        <SearchBox
          className="monsters-search-box"
          placeholder="search monsters"
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
  )};
// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//     console.log('constructor')
//   }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/users').then((response) =>
  //     response.json().then((users) =>
  //       this.setState(() => {
  //         return { monsters: users }
  //       }),
  //     ),
  //   )
  // }

//   onSearchChange = (event) => {
//     console.log(event.target.value)
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     console.log('render')

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//    

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className="monsters-search-box"
//           placeholder="search monsters"
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     )
//   }
// }

export default App;
