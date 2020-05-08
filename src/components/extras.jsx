import React, { Component } from 'react'

export default class Extras extends Component {
  render() {
    return (
      // <section className="darkContainer" id="ap-extras">
      //   <div className="container">
      //     <div className="row sectionSeparator">
      //       <div className="col-sm-12 col-md-6">
      //       </div>
      //     </div>
      //   </div>
      // </section>
      <section  className="darkContainer" id="ap-extras">
        <div className="container">
     
          <div className="gallery" id="gallery">
            <div className="mb-3 pics animation all 2">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg" alt="abc" />
            </div>
            <div className="mb-3 pics animation all 1">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="def" />
            </div>
            <div className="mb-3 pics animation all 1">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Vertical/mountain2.jpg" alt="ghi" />
            </div>
            {/* <div className="mb-3 pics animation all 2">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="jkl" />
            </div> */}
            <div className="mb-3 pics animation all 2">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" alt="mno" />
            </div>
            <div className="mb-3 pics animation all 1">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" alt="pqr" />
            </div>
          </div>

        </div>
      </section>
    )
  }
}