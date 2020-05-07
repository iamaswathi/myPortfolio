import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="darkContainer" id="ap-footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="text-left text-xs-center">
                        <p>All right reserved Aswathi Prakash @ 2020</p>
                    </div>
                </div>
                <div className="col-sm-6">
                    <ul className="social-icon">
                        <li><a href="www.google.com"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="www.google.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="www.google.com"><i className="fab fa-github"></i></a></li>
                        <li><a href="www.google.com"><i className="fab fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
      </footer>
    )
  }
}