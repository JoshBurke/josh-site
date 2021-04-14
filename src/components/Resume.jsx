import React from 'react';
import './Resume.css';
import coverImg from '../images/josh-cover.JPG';
import { Parallax } from 'react-parallax';

export default function Resume() {

  return (
    <div className='resume'>
      <Parallax blur={1} bgImage={coverImg} strength={200}>
        <div className='name'>
          Josh Burke
        </div>
        <div className='contactLine'>
          Full Stack Developer | me@joshburke.xyz
        </div>
      </Parallax>
      <div className='aboutSleeve'>
        <div className='about'>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className='skillsSleeve'>
        <div className='skills'>
          <h1>Skills</h1>
          <p>Yo mama Yo maYo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama ma Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama </p>
        </div>
      </div>
      <div className='careerSleeve'>
        <div className='career'>
          <h1>Career</h1>
          <p>Yo mama Yo maYo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama ma Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama </p>
        </div>
      </div>
      <div className='educationSleeve'>
        <div className='education'>
          <h1>Education</h1>
          <p>Yo mama Yo maYo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama ma Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama </p>
        </div>
      </div>
      <div className='projectsSleeve'>
        <div className='projects'>
          <h1>Projects</h1>
          <p>Yo mama Yo maYo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama ma Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama Yo mama </p>
        </div>
      </div>
    </div>
  )
}