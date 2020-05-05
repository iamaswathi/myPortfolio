import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section class="darkContainer" id="HeaderSec">
        <div class="container">
          <div class="row sectionSeparator">
            <div class="col-sm-6">
              <span class="whoAmI">Hello I'm</span>
              <h2>Aswathi Prakash</h2>
              <h4>Frontend developer</h4>
              <ul>
                <li><i class="fa fa-envelope"></i><a href="mailto:">inboxaswathi@gmail.com</a></li>
                <li><i class="fa fa-phone"></i><a href="callto:">+61 401179442</a></li>
                <li><i class="fa fa-map-marker"></i><address>54, Fitzroy Srt, Burwood, NSW, Australia</address></li>
              </ul>
            </div>

            <div class="col-sm-6">
              <div class="heroineImage">
                <div class="heroineImageBorder">
                  <img src="/Users/Achu/Study_React/myPortfolio/src/assets/images/hero.png" alt="Heroine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      
    )
  }
}

