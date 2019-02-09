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
          <h3>Full-stack Web Developer</h3>
          <h3>Graphic Designer</h3>
          <h3>Photographer</h3>
        </div>
        <ScrollableAnchor id={'about'}>
          <div className="aboutme">
            <h3 className="title3">About Me</h3>
            <div className="aboutwrap">
              <h4 className="abouttext">My name is Jared Choate, and I am a Full-stack Web Developer. I am from northern California and am currently living in Utah. I enjoy doing many things, but mainly spending time with my wife. We like driving and exploring the mountains.<br /><br /> After taking some classes in HTML and CSS, I found my liking for Web Development. However, I was in school for a different career path. After a time I realized that I was not happy and decided to make a change in my life. I attended DevMountain where I gained the skills I needed to become something I enjoy being. Today I am a husband, a family-man, and a Web Developer. </h4>
              <img className="pic" src={pic} alt="Me" />
            </div>
          </div>
        </ScrollableAnchor>
        <div className="second"></div>
        <div className="skills">
          <ScrollableAnchor id={'skills'}>
            <h3 className="title3 skilltitle">My Skills</h3>
          </ScrollableAnchor>

          <div className="logos">
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

          <div className="logos">

            <div>
              <img className="logosimg" src={reacticon} alt="react" />
              <p>React</p>

            </div>
            <div>
              <img className="logosimg" src={redux} />
              <p>Redux</p>
            </div>
            <div>
              <img className="logosimg" src={vue} alt="vue logo" />
              <p>Vue</p>
            </div>
            <div>
              <img className="logosimg" src={js} alt="javascript" />
              <p>Javascript</p>

            </div>

          </div>

          <div className="logos">
            <div>
              <img className="logosimg" src={node} alt="node" />
              <p>Node</p>
            </div>
            <div>
              <img className="logosimg" src={html} alt="html" />
              <p>HTML5</p>
            </div>
            <div>
              <img className="logosimg" src={css} alt="css" />
              <p>CSS</p>
            </div>
            <div>
              <img className="logosimg" src={postgres} alt="postgresql" />
              <p>PostgreSQL</p>
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
                <h4>This project was made to be a clone of apple.com and was made using React.js for the front-end, Node.js and Express for the back-end, and the database is run by PostreSQL. The functionality of the cart allows a user to add items to the cart, update quantity, and place an order. All orders are then stored in the database with the user's id using Sessions, and all orders specific to that user are then available to see. This taught me a lot about planning, focus, and making sure the MVP is done when it needs to be done.</h4>
                <div className="logocontainer">
                  <a href="https://github.com/jcchoate/PersonalProject">
                    <img className="githublogo" src={github} alt="github logo" />
                  </a>
                  <a href="http://pineapple.jaredchoatepro.com">
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
