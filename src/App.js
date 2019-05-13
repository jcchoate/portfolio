import React, { Component } from 'react';
import MicrolinkCard from '@microlink/react';
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import pic from './EDIT-8106.JPG'
import js from './iconfinder_code-programming-javascript-software-develop-command-language_652581.png'
import css from './iconfinder_icon-77-document-file-css_315874.png'
import reacticon from './iconfinder_React.js_logo_1174949.png'
import html from './iconfinder_html5_245995.png'
import node from './iconfinder_nodejs-512_339733.png'
import postgres from './postgresqlicon.png'
import redux from './Redux.png'
import photoshop from './photoshop.jpg'
import illustrator from './adobeillustrator.png'
import ae from './aftereffects.png'
import flash from './adobeflash.png'
import vue from './vuelogo.png'
import apple1 from './Screen Shot 2019-01-22 at 14.47.44.png'
import apple2 from './Screen Shot 2019-01-22 at 14.48.05.png'
import apple3 from './Screen Shot 2019-01-22 at 14.49.54.png'
import ScrollableAnchor from 'react-scrollable-anchor'
import github from './_ionicons_svg_logo-github.svg'
import internet from './_ionicons_svg_md-globe.svg'
import trasset1 from './Screen Shot 2019-02-16 at 12.08.47.png'
import trasset2 from './Screen Shot 2019-02-16 at 12.11.24.png'
import trasset3 from './Screen Shot 2019-02-16 at 12.11.50.png'
import trasset4 from './Screen Shot 2019-02-16 at 12.12.50.png'
import laravel from './laravel.png'
import php from './php.png'
import gatsby from './gatsby.png'
import mysql from './myrealsql.png'
import tlaunch1 from './Screen Shot 2019-05-13 at 14.37.52.png'
import tlaunch2 from './Screen Shot 2019-05-13 at 14.38.28.png'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ScrollableAnchor id={'home'}>
          <div>
            <ul className="navigation">
              <a className="navtag" href='#home'>
                <li className="navtag">Home</li>
              </a>
              <a className="navtag" href="#about">
                <li className="navtag">About Me</li>
              </a>
              <a className="navtag" href="#skills">
                <li className="navtag">My Skills</li>
              </a>
              <a className="navtag" href="#projects">
                <li className="navtag">Projects</li>
              </a>
              <a className="navtag" href="#contact">
                <li className="navtag">Contact</li>
              </a>
            </ul>
          </div>
        </ScrollableAnchor>
        <div className="titlepage">
          <h1>Jared Choate</h1>
          <h3>Full-stack Software Engineer</h3>
          <h3>Product Manager</h3>
          <h3>Graphic Designer</h3>
        </div>
        <ScrollableAnchor id={'about'}>
          <div className="aboutme">
            <h3 className="title3">About Me</h3>
            <div className="aboutwrap">
              <h4 className="abouttext">My name is Jared Choate, and I am a Full-stack Web Developer. I am from northern California and currently living in Utah. I enjoy doing many things, but mainly spending time with my wife. We like driving and exploring the mountains.<br /><br /> After deciding to make a change in my life/career path, I attended DevMountain where I learned the skills necessary to be valuable. Since then, my life has changed. I'm currently a Quality Assurance Engineer / Product Manager for DevSquad.  </h4>
              <img className="pic" src={pic} alt="Me" />
            </div>
          </div>
        </ScrollableAnchor>
        <div className="second"></div>
        <div className="skills">
          <ScrollableAnchor id={'skills'}>
            <h3 className="title3 skilltitle">My Skills</h3>
          </ScrollableAnchor>
          {/********************** ADOBE SOFTWARE **********************************************/}
          <div className="logos" id="ADOBE">
            <div>
              <img className="logosimg" src={photoshop} alt="photoshop logo" />
              <p>Photoshop</p>
            </div>
            <div>
              <img className="logosimg" src={illustrator} alt="illustrator logo" />
              <p>Illustrator</p>
            </div>
            <div>
              <img className="logosimg" src={ae} alt="after effects logo" />
              <p>After Effects</p>
            </div>
            <div>
              <img className="logosimg" src={flash} alt="flash logo" />
              <p>Flash</p>
            </div>

          </div>
          {/****************************** FRAMEWORKS ******************************************/}
          <div className="logos" id='FRAMEWORKS'>
            <div>
              <img className="logosimg" src={laravel} alt="laravel" />
              <p>Laravel</p>
            </div>

            <div>
              <img className="logosimg" src={reacticon} alt="react" />
              <p>React</p>
            </div>

            <div>
              <img className="logosimg" src={vue} alt="vue logo" />
              <p>Vue</p>
            </div>
            <div>
              <img className="logosimg" src={gatsby} alt="gatsby logo" />
              <p>Gatsby</p>
            </div>
          </div>
          {/******************************** LANGUAGES *********************************/}
          <div className="logos">
            <div>
              <img className="logosimg" src={js} alt="javascript" />
              <p>Javascript</p>
            </div>
            <div>
              <img className="logosimg" src={php} />
              <p>PHP</p>
            </div>
            <div>
              <img className="logosimg" src={html} alt="html" />
              <p>HTML5</p>
            </div>
            <div>
              <img className="logosimg" src={css} alt="css" />
              <p>CSS</p>
            </div>
          </div>
          {/*********************************** EXTRAS *************************************/}
          <div className="logos">
            <div>
              <img className="logosimg" src={node} alt="node" />
              <p>Node</p>
            </div>
            <div>
              <img className="logosimg" src={redux} />
              <p>Redux</p>
            </div>
            <div>
              <img className="logosimg" src={postgres} alt="postgresql" />
              <p>PostgreSQL</p>
            </div>
            <div>
              <img className="logosimg" src={mysql} alt="postgresql" />
              <p>MySQL</p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <ScrollableAnchor id={'projects'}>
            <h3 className="title3 skilltitle woohoo">My Projects</h3>
          </ScrollableAnchor>
          <div className="project-list">
          </div>
          <div className="appleproject">
          <h4 className="appletitle">tLaunch</h4>
            <div className="applewrap">
              <Carousel>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={tlaunch1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={tlaunch2} />
                </Carousel.Item>
              </Carousel>
              <div className="project-info">
                <h4>The purpose was to provide a robust platform for companies who are looking to fill positions. The app allows an owner to create a team to help the recruiting process. Recruiters will be invited to join the team where they can finish inviting. They will interview candidates and send them to interviewers. Candidates will be rated based on their interviews and the company will have the option to contract the candidate, filling the position.</h4>
                <h4>Tech stack: Laravel, PHP, Vue.js, MySQL</h4>
                <div className="logocontainer">
                  <a href="https://tlaunch.com">
                    <img className="githublogo" src={internet} alt="internet icon" />
                  </a>
                </div>
              </div>
            </div>
            <h4 className="appletitle">Apple Clone</h4>
            <div className="applewrap">
              <Carousel>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={apple1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={apple2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={apple3} />
                </Carousel.Item>
              </Carousel>
              <div className="project-info">
                <h4>The functionality of the cart allows a user to add items to the cart, update quantity, and place an order. All orders are then stored in the database with the user's id using Sessions, and all orders specific to that user are then available to see. This taught me a lot about planning, focus, and making sure the MVP is done when it needs to be done.</h4>
                <h4>Tech stack: React, JavaScript, Node, Express, Sessions, PostgreSQL</h4>
                <div className="logocontainer">
                  <a href="https://github.com/jcchoate/PersonalProject">
                    <img className="githublogo" src={github} alt="github logo" />
                  </a>
                  <a href="https://pineapple.jaredchoatepro.com">
                    <img className="githublogo" src={internet} alt="internet icon" />
                  </a>
                </div>
              </div>
            </div>
            <h4 className="appletitle">Trassets (personal finance tracker)</h4>
            <div className="applewrap">
              <Carousel>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={trasset1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={trasset2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={trasset3} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width={1200} alt="900x500" src={trasset4} />
                </Carousel.Item>
              </Carousel>
              <div className="project-info">
                <h4>This project was made to help users track their financial patterns and easily see their financial growth. This app will help them visualize and easily see how to better their finances. It allows them to make calculated goals and easily see progress towards these goals.</h4>
                <h4>Tech stack: React, JavaScript, Node, Express, Sessions, Plotly.js, Nodemailer</h4>
                <div className="logocontainer">
                  <a href="https://github.com/team-awesome99999/personal-finance">
                    <img className="githublogo" src={github} alt="github logo" />
                  </a>
                  <a href="https://trassets.jaredchoatepro.com">
                    <img className="githublogo" src={internet} alt="internet icon" />
                  </a>
                </div>
              </div>
            </div>
            <ScrollableAnchor id={'contact'}>
              <div className="contact-list">
                <h3 className="title3">Contact Me</h3>
                <div className="contacts">
                  <div className="contactInfo">Phone: <div className="phone"> (208) 201-1999</div></div>
                  <div className="contactInfo">Email: <div className="email">jaredchoatepro@gmail.com</div></div>
                  <div className="contactInfo">LinkedIn: <a href="https://www.linkedin.com/in/jaredchoatepro/">linkedin.com/in/jaredchoatepro</a></div>
                  <div className="contactInfo">Github: <a href="https://github.com/jcchoate">github.com/jcchoate</a></div>
                </div>
              </div>
            </ScrollableAnchor>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
