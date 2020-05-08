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
              <p>I'm obsessed with making things and even more obsessed with making things better. After graduating from Periyar University I've been actively involved in the website and mobile application development for the last 7+ years. My specialty is website development, making pixel cut, beautiful semantic HTML & CSS. 
When I'm not at my desk, I probably hang out with my husband, cook something new, get myself occupied with art and craft work, reading, gardening or stitching, I am a neat freak, so you can imagine what else I will be doing!</p>
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

