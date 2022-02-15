import Header from "./components/Header"
import EmbeddedView from "./components/EmbeddedView"
import BookCard from "./components/BookCard"
import SearchBox from "./components/SearchBox"
import Footer from "./components/Footer"


function App() {
  
  
  const searchValue="tree"
  const url= `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`

  
  fetch(url)
  .then(response => response.json())
  .then(result => console.log(result.items[0]))


  return (
    <div className="App">
      
      <Header />
      <SearchBox />
      <BookCard />
      <EmbeddedView />
      <Footer />
    </div>
  );
}

export default App;
