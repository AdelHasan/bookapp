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
  const [searchValue, setSearchValue] = useState("curtain")
  const [searchBoxVal, setSearchBoxVal] = useState("flower")

  const handleUpdate = (e) => {
    setSearchBoxVal(e.target.value)
  }

  const handleSubmit = (val) => {
     setSearchValue(val)
  }

  
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`;

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.items;
    // console.log("item", item);
    setBooks(item);
 
  }, [searchValue]);

  // console.log(books);
    if (books) {
    return (
      <div className="App">
        
        <Header />
        <SearchBox searchBoxVal={searchBoxVal} handleUpdate={handleUpdate} handleSubmit={handleSubmit}/>
        <CardContainer books={books}/>
        {/* <EmbeddedView /> */}
        <Footer />
      </div>
    );
    } else {
      return <div>Loading...</div>
    }
 

  

  
}

export default App;
