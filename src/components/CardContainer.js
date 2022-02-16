import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const CardContainer = () => {
  const [books, setBooks] = useState([]);

  const searchValue = "superman";
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyDgs0P5NgyAp6l1iSp--NyhrT9MmDa1U9k`;

  useEffect(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const item = data.items;
    console.log("item", item);
    setBooks(item);
  }, []);

  console.log(books);

  return (
    <div className="cardcontainer">
      {books.map((item) => (
        <div className="card">
          <h2>{item.volumeInfo.title}</h2>
          {item.volumeInfo.imageLinks ? (
            <img src={item.volumeInfo.imageLinks.smallThumbnail} />
          ) : (
            <p>Image Not Available</p>
          )}
          <h3>{item.volumeInfo.subtitle}</h3>
          <p>{item.volumeInfo.authors[0]}</p>
          <p>{item.volumeInfo.authors[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
