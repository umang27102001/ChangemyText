import React from "react";
import PropTypes from "prop-types";
export default function NavBar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.myMode}`}
        data-bs-theme={props.myMode}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            {props.title}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/about">
                  About
                </a>
              </li>
            </ul>
           
       <div className="form-check form-switch">
            <button className="btn" style={{backgroundColor:props.myMode==="light"?"black":"white",border:"none",borderRadius:"40px"}}><img src={props.modeIcon} style={{width:"2rem",filter:`invert(${props.myMode==="light"?100:0}%)`}} onClick={props.toggleMode} alt="" /></button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  myMode: PropTypes.string.isRequired,
};
NavBar.defaultProps = {
  title: "TextUtils",
  myMode: "light",
};
