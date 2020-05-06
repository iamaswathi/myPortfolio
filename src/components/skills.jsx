import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <section className="darkContainer" id="ap-skills">
      <div className="container">
        <div className="row sectionSeparator">
          <div className="col-sm-12 col-md-6">
            <h3>Technical Skills</h3>
            <div className="skills">
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">Javascript</div>
                    <div className="techSkillRating">85%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage jsWidth"></div>
                  </div>
                </div>
              </div>
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">Typescript</div>
                    <div className="techSkillRating">80%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage tsWidth"></div>
                  </div>
                </div>
              </div>
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">Angular</div>
                    <div className="techSkillRating">74%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage ngWidth"></div>
                  </div>
                </div>
              </div>
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">React</div>
                    <div className="techSkillRating">45%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage reactWidth"></div>
                  </div>
                </div>
              </div>
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">HTML5</div>
                    <div className="techSkillRating">90%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage htmlWidth"></div>
                  </div>
                </div>
              </div>                                    
              <div className="skillItem">
                <div className="skillSet">
                  <div className="skillInfo">
                    <div className="skillName">CSS3</div>
                    <div className="techSkillRating">90%</div>
                  </div>
                  <div className="progressBar">
                    <div className="skillPercentage cssWidth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-sm-12 col-md-6">
            <h3>Professional Skills</h3>
            <ul className="mh-professional-progress">
              <li>
                  <div className="ap-progress ap-progress-circle active" data-progress="95"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" strokeWidth="5" fillOpacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" strokeWidth="5" fillOpacity="0" className="commSkill"></path></svg><p className="progressbar-text skillsCircle">95%</p></div>
                  <div className="pr-skill-name">Communication</div>
              </li>
              <li>
                  <div className="ap-progress ap-progress-circle active" data-progress="78"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" strokeWidth="5" fillOpacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" strokeWidth="5" fillOpacity="0" className="projectMgntSkill"></path></svg><p className="progressbar-text skillsCircle">78%</p></div> 
                  <div className="pr-skill-name">Team Work</div>
              </li>
              <li>
                  <div className="ap-progress ap-progress-circle active" data-progress="90"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" strokeWidth="5" fillOpacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" strokeWidth="5" fillOpacity="0" className="teamWorkSkill"></path></svg><p className="progressbar-text skillsCircle">90%</p></div>
                  <div className="pr-skill-name">Project Management</div>
              </li> 
              <li>
                  <div className="ap-progress ap-progress-circle active" data-progress="60"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" strokeWidth="5" fillOpacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" strokeWidth="5" fillOpacity="0" className="creativeSkill"></path></svg><p className="progressbar-text skillsCircle">80%</p></div>
                  <div className="pr-skill-name">Creativity</div>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
