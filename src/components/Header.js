import {BrowserRouter as Router, Link} from 'react-router-dom'


const Header = () => {
  return (
    <div className="col">
      <h1 className="text-center">Research Launchpad</h1>
      <nav>
        <ul>
          {/* <Router>
          <Link to="/">About</Link>
          <Link to="/readinglist">Reading List</Link>
          </Router> */}
        </ul>
      </nav>
    </div>
  )
}

export default Header