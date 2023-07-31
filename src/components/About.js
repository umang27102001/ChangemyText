import React from "react";
export default function About(props) {
  return (
    <div className="container" style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#2d2f2e"}}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
            >
             Manipulate your Text.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
            style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
          >
            <div className="accordion-body" >
             Using ChangemyText you can manipulate your text like you can convert your text into uppercase or lowercase etc.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
            >
              Free and user Friendly.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
            style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
          >
            <div className="accordion-body">
              ChangemyText is very user Friendly app and free to use where you can manipulate your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
            >
              Device compatible.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
            style={{color:props.myMode==="light"?"#212529":"white",backgroundColor:props.myMode==="light"?"white":"#212529"}}
          >
            <div className="accordion-body">
              You can run ChangemyText on desktop or a tablet or a mobile phone.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
