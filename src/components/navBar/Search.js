import React from 'react'

const Search = ({search}) => {
  return (
    <form className={`search-form ${search ? 'active' : null}`}>
    <input type="search" id="search-box" placeholder="search here..." />
    <label htmlFor="search-box" className="fas fa-search" />
  </form>
  )
}

export default Search