import React from 'react'

import './App.css'
import CardList from './components/CardList'
import SearchBox from './components/SearchBox'

class App extends React.Component {
  state = {
    monsters: [],
    text: ''
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    const { monsters, text } = this.state
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(text.toLowerCase())
    })
    return (
      <div className='App'>
        <h1>Monster Rolodex</h1>
        <SearchBox
          value={this.state.text}
          // onTextChange={e => this.setState({ text: e.target.value })}
          onTextChange={this.handleChange}
          placeholder='search monster'
        />

        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App
