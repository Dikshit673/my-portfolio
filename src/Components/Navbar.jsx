import React, { useState } from 'react'

const Navbar = () => {
    const [state, setState] = useState(false);
    return (
        <>
            <section className='main-section'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="/"><i className="fa-solid fa-user-tie"></i><div className='letter-P d-inline'>P</div>ortfolio</a>

                        <button className="navbar-toggler" type="button" onClick={() => setState(!state)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse ${state ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">
                                        <i className="fa-solid fa-house" />
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/service">
                                        <i className="fa-solid fa-address-card" />
                                        Intro
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">

                                        <i className="fa-solid fa-list" />
                                        services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        <i className="fa-brands fa-blogger-b"></i>
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">
                                        <i className="fa-solid fa-phone" />
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </section >


        </>
    )
}

export default Navbar
