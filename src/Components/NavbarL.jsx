import React from 'react'

const NavbarL = () => {
    return (
        <>
            <section className='main-sectionL'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="/"><i className="fa-solid fa-user-tie"></i><div className='letter-P d-inline'>P</div>ortfolio</a>

                        <button className="navbar-toggler" type="button" >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">
                                        <i className="fa-solid fa-house" />
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#intro">
                                        <i className="fa-solid fa-address-card" />
                                        Intro
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#service">

                                        <i className="fa-solid fa-list" />
                                        services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog">
                                        <i className="fa-brands fa-blogger-b"></i>
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">
                                        <i className="fa-solid fa-phone" />
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </section>
        </>
    )
}

export default NavbarL
