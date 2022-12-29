import React from 'react'
import education from './data/educations'
export default function EducationSection() {
    return (
        <div className="experience" id="educations">
            <div className="container">
                <header className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My Resume</p>
                    <h2>Education</h2>
                </header>
                <div className="timeline">
                    {education.map(edu => {
                        return (
                            <div key={edu.id} className={` timeline-item wow ${edu.position} slideIn${edu.position}`} data-wow-delay="0.1s" >
                                <div className="timeline-text">
                                    <div className="timeline-date">{edu.date}</div>
                                    <h2>Front-End Web Development with React</h2>
                                    <p>Online couse offered by <span>Coursera</span> and <span>Hong Kong University of
                                        Science and Technology</span></p>
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
