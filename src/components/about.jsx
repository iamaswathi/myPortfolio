import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section className="darkContainer" id="AboutSec">
        <div className="container">
          <div className="row sectionSeparator">
            <div className="col-sm-12 col-md-6">
              <div className="aboutMeImgContainer">
                {/* <div className="aboutMeImg"></div> */}
            <img src="./assets/images/ab-img.png" alt="Heroine" className="aboutMeImg" />
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <h3>About Me</h3>
              <p>I am an experienced Frontend Developer with a demonstrated
                history of working in the information technology and services
                industry. I'm good at</p>
                <ul>
                  <li><span>JavaScript</span></li>
                  <li><span>TypeScript</span></li>
                  <li><span>Angular</span></li>
                  <li><span>HTML5</span></li>
                  <li><span>CSS3</span></li>
                  <li><span>React</span></li>
                  <li><span>jQuery</span></li>
                  <li><span>jQuery Mobile</span></li>
                  <li><span>Agile methodology</span></li>
                </ul>
                <button className="downloadBtn">Downlaod CV <i className="fa fa-download"></i></button>
            </div>
          </div>
        </div>
      </section>   
      
    )
  }
}

