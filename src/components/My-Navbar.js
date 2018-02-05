import React from 'react'

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={props.logo} width="140px" alt="logo" />
      </a>
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarNavDropdown">
         <ul className="navbar-nav ml-auto ">
           <li className="nav-item">
             <a className="nav-link text-white" href="#">home <span className="sr-only">(current)</span></a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#">employee</a>
           </li>
           <li className="nav-item active">
             <a className="nav-link text-white" href="#">company</a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#">services</a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#">contact</a>
           </li>
         </ul>
       </div>
  </nav>
  )
}
export default Navbar
