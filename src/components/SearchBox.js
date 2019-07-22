import React from 'react'

const SearchBox = ({ value, onTextChange }) => {
  return (
    <div>
      <input
        type='search'
        palceholder='search monsters'
        autoFocus
        value={value}
        onChange={e => onTextChange(e)}
      />
    </div>
  )
}

export default SearchBox
