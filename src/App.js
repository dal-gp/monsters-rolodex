import React from 'react'

import CardList from './components/CardList'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => ({ monsters: users })))
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className='App'>
        <input
          value={this.state.searchField}
          onChange={e => {
            const searchField = e.target.value
            this.setState(() => ({ searchField }))
            // this.setState({ searchField: e.target.value })
          }}
          type='serach'
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
