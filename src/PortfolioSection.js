import React from 'react'
import portfolios from './data/portfolios'
export default function PortfolioSection() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <p>My Portfolio</p>
          <h2>My Excellent Portfolio</h2>
        </div>
        <div className="row portfolio-container">
          {portfolios.map((portfolio) => {
            const { id, title, description, image, link } = portfolio
            return (

              <div className="col-lg-4 col-md-6 col-sm-12 portfolio-item filter-3 wow fadeInUp"
                data-wow-delay="0.4s" key={id}>
                <div className="portfolio-wrap">
                  <div className="portfolio-img"><img src={image} alt={title} />
                    <p className="portfolio-img-description">{description}</p>
                  </div>
                  <div className="portfolio-text">
                    <h3>{title}</h3><a className="btn"
                      href={link} target="_blank">+</a>
                  </div>
                </div>
              </div>
            )
          }
          )}

        </div>
      </div>
    </div>
  )
}
