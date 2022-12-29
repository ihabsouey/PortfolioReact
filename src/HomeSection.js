import React from 'react'

export default function HomeSection() {
  return (
    <div className="hero" id="home">
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-12 col-md-6">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p>I'm</p>
                            <h1>Souey Ihab</h1>
                            <h2></h2>
                            <div className="typed-text">Web Developer, Front End Developer</div>
                        </div>
                        <div className="hero-btn"><a className="btn" href="mailto:ihab.souey@gmail.com?subject=Hiring">Hire
                                Me</a><a className="btn" href="cv/cv-ihabSouey.pdf" download="SoueyIhabCV">Download my
                                CV</a></div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 d-none d-md-block ">
                    <div className="hero-image"><img src="img/hero3.AVIF" alt="Hero Image"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}
