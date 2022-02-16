import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const CardContainer = ({books}) => {
  const [list, setList] = useState(books)
  console.log(books)
  
  useEffect(() => {
    setList(books)
  }, [list])
  

  return (
    <div className="cardcontainer">
      {list.map((item, index) => (
        <div className="card" key={index}>
          <h2>{item.volumeInfo.title}</h2>
          {item.volumeInfo.imageLinks ? (
            <img src={item.volumeInfo.imageLinks.smallThumbnail} />
          ) : (
            <p>Image Not Available</p>
          )}
          <h3>{item.volumeInfo.subtitle}</h3>
          
          {item.volumeInfo.authors ? (
            <>
            <p>{item.volumeInfo.authors[0]}</p>
            <p>{item.volumeInfo.authors[1]}</p>
            </>
          ) : (
            <p>Authors Not Available</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
