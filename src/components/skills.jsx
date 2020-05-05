import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <section class="darkContainer" id="SkillsSec">
      <div class="container">
        <div class="row sectionSeparator">
          <div class="col-sm-12 col-md-6">
            <h3>Technical Skills</h3>
            <div class="skills">
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">Javascript</div>
                    <div class="techSkillRating">85%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage jsWidth"></div>
                  </div>
                </div>
              </div>
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">Typescript</div>
                    <div class="techSkillRating">80%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage tsWidth"></div>
                  </div>
                </div>
              </div>
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">Angular</div>
                    <div class="techSkillRating">74%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage ngWidth"></div>
                  </div>
                </div>
              </div>
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">React</div>
                    <div class="techSkillRating">45%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage reactWidth"></div>
                  </div>
                </div>
              </div>
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">HTML5</div>
                    <div class="techSkillRating">90%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage htmlWidth"></div>
                  </div>
                </div>
              </div>                                    
              <div class="skillItem">
                <div class="skillSet">
                  <div class="skillInfo">
                    <div class="skillName">CSS3</div>
                    <div class="techSkillRating">90%</div>
                  </div>
                  <div class="progressBar">
                    <div class="skillPercentage cssWidth"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-sm-12 col-md-6">
            <h3>Professional Skills</h3>
            <ul class="mh-professional-progress">
              <li>
                  <div class="mh-progress mh-progress-circle active" data-progress="95"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" stroke-width="5" fill-opacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" stroke-width="5" fill-opacity="0" class="commSkill"></path></svg><p class="progressbar-text skillsCircle">95%</p></div>
                  <div class="pr-skill-name">Communication</div>
              </li>
              <li>
                  <div class="mh-progress mh-progress-circle active" data-progress="55"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" stroke-width="5" fill-opacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" stroke-width="5" fill-opacity="0" class="projectMgntSkill"></path></svg><p class="progressbar-text skillsCircle">55%</p></div> 
                  <div class="pr-skill-name">Team Work</div>
              </li>
              <li>
                  <div class="mh-progress mh-progress-circle active" data-progress="86"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" stroke-width="5" fill-opacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" stroke-width="5" fill-opacity="0" class="teamWorkSkill"></path></svg><p class="progressbar-text skillsCircle">86%</p></div>
                  <div class="pr-skill-name">Project Management</div>
              </li> 
              <li>
                  <div class="mh-progress mh-progress-circle active" data-progress="60"><svg viewBox="0 0 100 100"><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#eee" stroke-width="5" fill-opacity="0"></path><path d="M 50,50 m 0,-47.5 a 47.5,47.5 0 1 1 0,95 a 47.5,47.5 0 1 1 0,-95" stroke="#555" stroke-width="5" fill-opacity="0" class="creativeSkill"></path></svg><p class="progressbar-text skillsCircle">60%</p></div>
                  <div class="pr-skill-name">Creativity</div>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
