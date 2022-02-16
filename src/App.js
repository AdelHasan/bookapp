import {useEffect, useState} from 'react'
import Header from "./components/Header"
import EmbeddedView from "./components/EmbeddedView"
import BookCard from "./components/BookCard"
import SearchBox from "./components/SearchBox"
import Footer from "./components/Footer"
import CardContainer from './components/CardContainer'
import axios from 'axios'


function App() {
  

  
  return (
    <div className="App">
      
      <Header />
      <SearchBox />
      <CardContainer />
      {/* <EmbeddedView /> */}
      <Footer />
    </div>
  );

  
}

export default App;
