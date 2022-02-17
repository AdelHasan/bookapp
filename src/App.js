import {useEffect, useState} from 'react'
import Header from "./components/Header"
import EmbeddedView from "./components/EmbeddedView"
import BookCard from "./components/BookCard"
import SearchBox from "./components/SearchBox"
import Footer from "./components/Footer"
import CardContainer from './components/CardContainer'
import axios from 'axios'


function App() {
  const [books, setBooks] = useState(null);
  const [searchValue, setSearchValue] = useState("book")
  const [searchBoxVal, setSearchBoxVal] = useState("")

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value)
    console.log(searchBoxVal);
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    // 
    makeAPICall();
    console.log(books)
  }

  
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`;
    
    const makeAPICall = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.items;
    console.log(data)
    // console.log("item", item);
    setBooks(item);
    }
    

  useEffect(() => {
    makeAPICall();
 
  }, []);

  // console.log(books);
    if (books) {
    return (
      <div className="App container">
        <div className="row">
        <Header />
        </div>
        {/* <SearchBox searchBoxVal={searchBoxVal} handleUpdate={handleUpdate} handleSubmit={handleSubmit}/> */}
        <form className="row">
          <input type="text"  placeholder="search books" onChange={handleChange} className="col-8"/>
          <input type="submit" onClick={handleSubmit} value="search" className="col-4"/>
        </form>
        <CardContainer books={books}/>
        {/* <EmbeddedView /> */}
        <div className="row">
        <Footer />
        </div>
      </div>
    );
    } else {
      return <div>Loading...</div>
    }
 

  

  
}

export default App;
