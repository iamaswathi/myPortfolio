import React, { Component } from 'react'
import heroine from '../assets/images/aswathi.png'

export default class Header extends Component {
  render() {
    return (
      <section className="darkContainer" id="ap-header">
        <div className="container">
          <div className="row sectionSeparator">
            <div className="col-sm-6">
              <span className="whoAmI">Hello I'm</span>
              <h2>Aswathi Prakash</h2>
              <h4>Frontend developer</h4>
              <ul>
                <li><i className="fa fa-envelope"></i><a href="mailto:">inboxaswathi@gmail.com</a></li>
                <li><i className="fa fa-phone"></i><a href="callto:">+61 401179442</a></li>
                <li><i className="fa fa-map-marker"></i><address>54, Fitzroy Srt, Burwood, NSW, Australia</address></li>
              </ul>
            </div>

            <div className="col-sm-6">
              <div className="heroineImage">
                <div className="heroineImageBorder">
                  <img src={heroine} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
  }
}

