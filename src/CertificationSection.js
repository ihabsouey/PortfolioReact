import React from 'react'

import certifications from './data/certifications'
export default function CertificationSection() {
    return (
        <div className="certification" id="certification">
            <div className="container">
                <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                    <p>My IT</p>
                    <h2>Certifications</h2>
                </div>
                    <div className="row">
                {certifications.map(certification => {
                        return (

                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" key={certification.id}>
                            <div className="certification-item">
                                <div className="certification-icon"><img src={certification.icon} alt="coursera logo" /></div>
                                <div className="certification-text">
                                    <h3>{certification.title}</h3>
                                    <p>{certification.description}</p>
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
