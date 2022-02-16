import {useState, useEffect} from 'react'

const SearchBox = ({handleSubmit, handleChange, searchBoxVal}) => {
  
  

  
  


  return (
    <form>
      <input type="text" placeholder="search for books" onChange={handleChange}/>
      <button onChange={handleChange} onClick={handleSubmit(searchBoxVal)}>Go</button>
    </form>
  )
}

export default SearchBox