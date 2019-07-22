import React from 'react'

import './SearchBox.css'

const SearchBox = ({ value, onTextChange }) => {
  return (
    <div>
      <input
        type='search'
        palceholder='search monsters'
        autoFocus
        value={value}
        onChange={e => onTextChange(e)}
        className='search'
      />
    </div>
  )
}

export default SearchBox
