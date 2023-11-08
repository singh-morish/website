import React from 'react'
import "./Services.css"
import {AiOutlineCheck} from "react-icons/ai"
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>HTML / CSS proficiency</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Javascript Proficiency</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Responsive Design</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Cross Browser Compatibility</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Accessibility to all users</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Using Github for Version Control</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Good Communication through the Project</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Taking Care of Security Problem</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Legal and Ethical Consideration</p>
            </li>
          </ul>
        </article>



        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Use of Server Side Language like Node and Python</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Use of MySQL and MongoDB for Database Management </p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Create robust APIs for Communication </p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Authentication and Authorization</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Data Security to avoid security vulnerabilites</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Asynchoronus Programming</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Testing and Debugging</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Continuous Integration / Continuous Deployment</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Compilance and Legal Consideration</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Programming Language</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Expertise in Multiple Language</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Understanding of Language EcoSystem</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Client centric Approach</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Code Quality and Best Practices</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Version control and Collaboration</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Testing and Quality Assurance</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Performance Optimization</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Consultation and Training</p>
            </li>
            <li>
              <AiOutlineCheck  className='service__list-icon'/>
              <p>Monitoring and Maintenance</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services