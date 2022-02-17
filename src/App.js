import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";

function App() {
  const [books, setBooks] = useState(null);
  const [searchValue, setSearchValue] = useState("book");
  const [library, setLibrary] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    // console.log(searchBoxVal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeAPICall();
    // console.log(books);
  };

  const addToLibrary = (link) => {
    setLibrary([...library, link])
    let libraryCopy = library.slice()
    libraryCopy.push(link)
    setLibrary(libraryCopy)
    // console.log(library)
  }

  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`;

  const makeAPICall = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.items;
    // console.log(data);
    // console.log("item", item);
    setBooks(item);
  };

  useEffect(() => {
    makeAPICall();
  }, []);

  
  if (books) {
    return (
      <div className="App container">
        <div className="row">
          <Header />
        </div>
        <form className="row">
          <input
            type="text"
            placeholder="search books"
            onChange={handleChange}
            className="form-control-md col-11"
          />
          <input
            type="submit"
            onClick={handleSubmit}
            value="search"
            className="btn btn-primary col-1"
          />
        </form>
        <CardContainer
          books={books}
          addToLibrary={addToLibrary}
          library={library}
        />
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
