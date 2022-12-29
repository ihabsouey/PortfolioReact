import React from 'react'

export default function AboutSection() {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.5s" id="about">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img"><img src="img/about.webP" alt="Image" /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-header text-left">
                                <p>Learn About Me</p>
                                <h2>Jr Front End Developer</h2>
                            </div>
                            <div className="about-text">
                                <p>Innovative developer and proactive, able to develop websites with elegant
                                    concepts and innovative. Talented in the project management and resolution
                                    independent of problems. Versatile and highly organized</p>
                            </div>
                            <div className="contacts">
                                <div className="section-header text-left">
                                    <p>Contact information</p>
                                </div>
                                <div className="contact-name">
                                    <p><i className="fa fa-phone"></i></p>
                                    <p><a href="tel:+21656933824">+216 56 933 824</a></p>
                                </div>
                                <div className="contact-name">
                                    <p><i className="fa fa-envelope"></i></p>
                                    <p><a href="mailto:ihab.souey@gmail.com">Ihab.souey@gmail.com</a></p>
                                </div>
                                <div className="contact-links">
                                    <div><i className="fab fa-linkedin-in"></i> <a
                                        href="https://www.linkedin.com/in/ihab-souey-985158156/"
                                        target="_blank">ihab souey</a></div>
                                    <div><i className="fab fa-facebook-f"></i> <a
                                        href="https://www.facebook.com/ihab.souey" target="_blank">ihab souey</a>
                                    </div>
                                    <div><i className="fab fa-github"></i> <a href="https://github.com/ihabsouey"
                                        target="_blank">ihab souey</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
