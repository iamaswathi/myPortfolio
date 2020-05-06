import React, { Component } from 'react'
import pdf from '../assets/AswathiPrakash_Resume.pdf'
import aboutme from '../assets/images/ab-img.png'

export default class About extends Component {
  render() {
    return (
      <section className="darkContainer" id="ap-about">
        <div className="container">
          <div className="row sectionSeparator">
            <div className="col-sm-12 col-md-6">
              <div className="aboutMeImgContainer">
                <img src={aboutme} alt="Heroine" className="aboutMeImg" />
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <h3>About Me</h3>
              <p>I am an experienced Frontend Developer with a demonstrated
                history of working in the fintech, information technology and services
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
                <a href={pdf} target="_blank" rel="noopener noreferrer" download="AswathiPrakash_Resume.pdf">
                  <button className="downloadBtn">Downlaod CV <i className="fa fa-download"></i></button>
                </a>
            </div>
          </div>
        </div>
      </section>   
      
    )
  }
}

