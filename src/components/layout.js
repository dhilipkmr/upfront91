import React from "react"
import { Link } from "gatsby"
import Upfront91Logo from '../../content/assets/upfrontVertical.png';

const Layout = props => {
  const { title, children, scrollToLocation } = props
  const [toggleNav, setToggleNav] = React.useState(false);

  return (
    <div id="site-wrapper" className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-item" role="menuitem" onClick={() => {scrollToLocation('theme')}}>
                Our Theme
              </li>
              <li className="nav-item" role="menuitem" onClick={() => {scrollToLocation('speakers')}}>
                Talks
              </li>
              <li className="nav-item" role="menuitem" onClick={() => {scrollToLocation('contactus')}}>
                Follow us
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            {/* <Link className="site-head-logo" to={`/`}>
              {title}
            </Link> */}
            <img src={Upfront91Logo} width="300px"/>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://github.com/vaporwavy/gatsby-london-after-midnight"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
