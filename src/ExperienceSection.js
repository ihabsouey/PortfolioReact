import React from 'react'
import experiences from './data/experiences'

export default function ExperienceSection() {
 

  return (
    <div className="experience" id="experience">
      <div className="container">
        <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
          <h2>Working Experience</h2>
        </header>
        <div className="timeline">
          {experiences.map((experience) => {
            const { id, title, date, description, position } = experience
            return (
                <div className={`timeline-item ${position} wow slideIn${position}`} data-wow-delay="0.1s" key={id}>
                  <div className="timeline-text">
                    <div className="timeline-date">{date}</div>
                    <h2>{title}</h2>
                    <h4>{description}</h4>
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