import React from 'react'
import "./Portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.png"
import IMG4 from "../../assets/portfolio4.png"
import IMG5 from "../../assets/portfolio5.jpg"
import IMG6 from "../../assets/portfolio6.jpg"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>


          <h3>Food Order App</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p12FoodOrderApp" className='btn'>Github</a>
          <a href="https://p17formauth.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>


          <h3>E-Book Store</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p19_react_toolKit" className='btn'>Github</a>
          <a href="https://p20bookstore.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>


          <h3>Modal Overlay</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p10_modal_overlay_userForm" className='btn'>Github</a>
          <a href="https://p10modaloverlayuserform.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>


          <h3>Form</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p5Form" className='btn'>Github</a>
          <a href="https://p5form.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>


          <h3>Form Authentication page</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p11-2-useReducerHook" className='btn'>Github</a>
          <a href="https://p11userformusereducer.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>


          <h3>Fovourite item Shoter</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Morish-Kumar/p26projectContext" className='btn'>Github</a>
          <a href="https://projectp26context.web.app/" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>

          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio