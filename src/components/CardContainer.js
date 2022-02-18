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
    <div className="cardcontainer col text-center" key={books[0].volumeInfo.title}>
      <div className="row text-center">
      {list.map((item, index) => (
        
        
        <div className="card col-sm-12 col-lg-4 col-md-6 text-center" key={index}>
          <h3 className="card-title">{item.volumeInfo.title}</h3>
          <div className="card-body">
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
              className="btn btn-light"
            >
              Read
            </a>
          ) : (
            <p>preview not available</p>
          )}
          <button
            className="btn btn-light"
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
        </div>
      ))}
      </div>
    </div>
  );
};

export default CardContainer;
