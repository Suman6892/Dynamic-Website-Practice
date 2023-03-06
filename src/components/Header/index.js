import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">SM</p>
      <ul className="nav-menu">
        <li>
          <a href="https://www.youtube.com/channel/UCkBmJePkj4ZKPs1S9BoqgZA">
            <img
              className="social-network-img"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/suman-kumar-mondal-7462681ba/">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/Suman6892">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/sumanmondal5">
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
