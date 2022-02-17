import { useEffect, useState } from "react";


const CardContainer = ({ books, addToLibrary, library }) => {
  const [list, setList] = useState(books);
  useEffect(() => {
    setList(books);
  }, [books]);

  // console.log(books);

  // useEffect(() => {
  //   setList(books);
  // }, [list]);

  return (
    <div className="cardcontainer row" key={books[0].volumeInfo.title}>
      {list.map((item, index) => (
        
        
        <div className="card col-sm-12 col-lg-4 col-md-6" key={index}>
          <h3>{item.volumeInfo.title}</h3>
          {item.volumeInfo.imageLinks ? (
            <img src={item.volumeInfo.imageLinks.smallThumbnail} />
          ) : (
            <p>Image Not Available</p>
          )}
          {/* <h3>{item.volumeInfo.subtitle}</h3> */}

          {item.volumeInfo.authors ? (
            <>
              <p>{item.volumeInfo.authors[0]}</p>
              <p>{item.volumeInfo.authors[1]}</p>
            </>
          ) : (
            <p>Authors Not Available</p>
          )}
          <div className="row">
          {item.volumeInfo.previewLink ? (
            <a
              href={item.volumeInfo.previewLink}
              target="_blank"
              className="btn btn-primary col-6"
            >
              Read
            </a>
          ) : (
            <p>preview not available</p>
          )}
          <button
            className="btn btn-primary col-6"
            onClick={() => {
              addToLibrary({
                link: item.volumeInfo.previewLink,
                title: item.volumeInfo.title
              });
            }}
          >
            Reading List
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
