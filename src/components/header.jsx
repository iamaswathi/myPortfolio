import React, { Component } from 'react'
import heroine from '../assets/images/aswathi.png'

export default class Header extends Component {
  render() {
    return (
      <section className="darkContainer" id="ap-header">
        <div className="container">
          <div className="row sectionSeparator ap-header-padding">
            <div className="col-sm-6 ap-header-padding1">
              <span className="whoAmI">Hello I'm</span>
              <h2>Aswathi Prakash</h2>
              <h4>Frontend developer</h4>
              <ul>
                <li><i className="fa fa-envelope"></i><a href="mailto:">inboxaswathi@gmail.com</a></li>
                <li><i className="fa fa-phone"></i><a href="callto:">+61 401179442</a></li>
                {/* <li><i className="fab fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/aswathi-prakash/" target="blank">linkedin.com/in/aswathi-prakash/</a></li> */}
              </ul>
              <ul className="social-icon wow fadeInUp animStyle" data-wow-duration="0.8s" data-wow-delay="0.7s">
                <li><a href="https://www.facebook.com/aswathi.prakash" target="blank"><i className="fab fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/aswathi-prakash/" target="blank"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/achuspran" target="blank"><i className="fab fa-github"></i></a></li>
              </ul>
            </div>

            <div className="col-sm-6 ap-header-padding2">
              <div className="heroineImage">
                <div className="heroineImageBorder">
                  <img src={heroine} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 text-center">
              <p className="myquote"> " Everyday is a chance for improvement. <br />There’s no reason we shouldn’t be taking 
                that opportunity we have been given. So my plan is to get better. <br/>
                Personally &#38; Professionally. To be better Every day. "</p>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

