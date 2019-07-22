import React from 'react'

import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchText: ''
    }
  }

  OnTextChange = e => {
    // console.log(e.target.value)
    const searchText = e.target.value
    this.setState({ searchText })
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ monsters: users })))
  }
  render() {
    const { monsters, searchText } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchText.toLowerCase())
    })
    return (
      <div className='App'>
        <SearchBox
          value={this.state.searchText}
          onTextChange={this.OnTextChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
