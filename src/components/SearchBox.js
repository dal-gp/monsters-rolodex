import React from 'react'

import './SearchBox.css'

class SearchBox extends React.Component {
  render() {
    return (
      <div>
        <input
          className='search'
          type='search'
          placeholder={this.props.placeholder}
          value={this.props.text}
          onChange={this.props.onTextChange}
        />
      </div>
    )
  }
}

export default SearchBox
