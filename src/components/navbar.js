import React from 'react'

const Navbar = (props = {links: []}) => {
  const links = props.links.map(item => (
    <li className="nav-item" key={Math.random()}>
      <a className="nav-link" href="#">{item}</a>
    </li>
  ))

  return (
    <nav className="navbar navbar-light bg-faded">
      <a className="navbar-brand col-lg-8" href="#">PickT</a>

      <ul className="nav navbar-nav col-lg-2 pull-lg-right">
        {links}
      </ul>
    </nav>
  )
}

export default Navbar
