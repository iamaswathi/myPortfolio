import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <section className="darkContainer" id="ap-timeline">
        <div className="container">
          <div className="row sectionSeparator">
            <div className="col-sm-12 col-md-6">
              <h3>Work Experience</h3>
              <div className="experienceItem">
                <h4>Frontend Developer at<span>Fidelity Information Services</span></h4>
                <div className="expYear">2016-2020</div>
                <p>Worked on projects like building a mobile Banking application and TAX& TIN Compliance
                application to fulfil all TAX obligations as specified by the law.
                Also managed to work as backend developer and business analyst when the situation demanded.
                Tools and technologies used include Angular(7), TypeScript, JavaScript, Bootstrap, HTML5,
                CSS3. </p>
                <p><i className="fa fa-award"></i>Emerged as a global finalist in the FinTech hackathon organised by FIS by demonstrating
                RnD projects based on Business Blockchain and Distributed Ledger Technologies.</p>
              </div>
              <div className="experienceItem">
                <h4>Frontend Developer at<span>Exilant Technologies Pvt Ltd</span></h4>
                <div className="expYear">2012-2016</div>
                <p>Worked on multiple projects parallely and on the different aspects of development
                  which includes, design, frontend web development, services development, database
                  management and iOS mobile application enhancements. Technologies include jQuery,
                  jQuery Mobile, Javascript, Angular JS, PhoneGap, D3 Charts, Cocoa Touch, Bootstrap,
                  HTML5, CSS3, Postgre and MySQL.</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6">
              <h3>Education</h3>
              <div className="experienceItem">
                <h4>Bachelor of Computer Science Engineering from <span>Periyar University</span></h4>
                <div className="eduYear">2008-2012</div>
              </div>
              <div className="experienceItem">
                <h4>Higher Secondry Education from <span>Ursuline Senior Secondary School</span></h4>
                <div className="eduYear">2006-2008</div>
              </div>

              <h3>Award</h3>
              <div className="experienceItem">
                <h4>Global finalist in fintech hackathon- InnovateIN48 2019, conducted by FIS global</h4>
                <div className="eduYear">2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}