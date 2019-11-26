import React from 'react';

const SearchBar = ({handleSubmit, handleChange, search}) => {
	return (
		<form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="search-bar" value={search} onChange={handleChange}/>
      <button type="submit" className="search-button">Search</button>
    </form>
  )
}

export default SearchBar