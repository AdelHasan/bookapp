
const ReadingList = ({library}) => {
  return (
    <div>
      <h1>Reading List</h1>
      <ul>
      {library.map((item, index) => (
        <li  key={index}><a href={item.link} target="_blank">{item.title}</a></li>
      ))}
      </ul>
    </div>
  )
}

export default ReadingList