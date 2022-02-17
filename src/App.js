import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardContainer from "./components/CardContainer";
import ReadingList from "./components/ReadingList";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [books, setBooks] = useState(null);
  const [searchValue, setSearchValue] = useState("javascript");
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
    // setLibrary([...library, link]);
    let libraryCopy = library.slice();
    libraryCopy.push(link);
    setLibrary(libraryCopy);
    console.log("LIBRARY:", library);
  };

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
        {/* <Router>
          <div>
            <Link to="/">About</Link>
            <Link to="/readinglist">Reading List</Link>
          </div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route
              path="/readinglist"
              element={<ReadingList library={library} />}
            />
          </Routes>
        </Router> */}
        <div>
          <div className="row text-center">
            <Header />
          
          <form >
            <input
              type="text"
              placeholder="search books"
              onChange={handleChange}
              className="form-control col-8"
            />
            <input
              type="submit"
              onClick={handleSubmit}
              value="search"
              className="btn btn-primary col-12"
            />
          </form>
          </div>
          <div className="row">
          <CardContainer
            books={books}
            addToLibrary={addToLibrary}
            library={library}
            
          />
          </div>
          {/* <div className="row">
            <ReadingList library={library} />
          </div> */}
          <Router className="text-center">
            <div className="text-center">
              <Link className="text-center" to="/">About</Link>
              <Link className="text-center" to="/readinglist">Reading List</Link>
            </div>
            <Routes>
              <Route path="/" element={<About />} />
              <Route
                path="/readinglist"
                element={<ReadingList library={library} />}
              />
            </Routes>
          </Router>

          <div className="row">
            <Footer />
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

export default App;
