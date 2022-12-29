import React from 'react'

export default function Header() {
    return (

        <div className="navbar navbar-expand-lg bg-light navbar-light fixed-top">
            <div className='container-fluid'><a href='index.html' className='navbar-brand'>Souey Ihab</a> <button type='button'
                className='navbar-toggler' data-toggle='collapse' data-target='#navbarCollapse'><span
                    className='navbar-toggler-icon'></span></button>
                <div className="collapse navbar-collapse justify-content-between" id='navbarCollapse'>
                    <div className="navbar-nav ml-auto">
                        <a href='#home' className="nav-item nav-link active">Home</a>
                        <a href='#about' className="nav-item nav-link">About</a>
                        <a href='#certification'
                            className="nav-item nav-link">Certifications</a>
                        <a href='#educations'
                            className="nav-item nav-link">Education</a>
                        <a href='#experience'
                            className="nav-item nav-link">Experience</a>
                        <a href='#portfolio'
                            className="nav-item nav-link">Portfolio</a>
                    </div>
                </div>
            </div>
        </div>



    )
}
