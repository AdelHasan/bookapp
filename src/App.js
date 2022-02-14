function App() {
  
  
  const searchValue="tree"
  const url= `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`

  
  fetch(url)
  .then(response => response.json())
  .then(result => console.log(result.items[0]))


  return (
    <div className="App">
      <h1>Project 2</h1>
    </div>
  );
}

export default App;
