import React from 'react'

const Navbar = () => {
    const [state, setState] = React.useState(false);
    // const [theme, setTheme] = React.useState(false);
    return (
        <>
            <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="/"><i className="fa-solid fa-user-tie"></i><div className='letter-P d-inline'>P</div>ortfolio</a>

                        <button className="navbar-toggler" type="button" title='toggle-button' onClick={() => setState(!state)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse nav-content-media ${state ? "show" : ""}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/#hero" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-house" />
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-address-card" />
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio" onClick={() => setState(!state)}>

                                        <i className="fa-solid fa-list" />
                                        portfolio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#blog" onClick={() => setState(!state)}>
                                        <i className="fa-brands fa-blogger-b"></i>
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact" onClick={() => setState(!state)}>
                                        <i className="fa-solid fa-phone" />
                                        Contact us
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </section>
            {/* <section className='navbar-section'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">

                        <a className="navbar-brand" href="/"><i className="fa-solid fa-user-tie"></i><div className='letter-P d-inline'>P</div>ortfolio</a>
                        <div className='theme-button' onClick={() => setTheme(!theme)}>
                            {theme ? <i className="fa-regular fa-sun"></i> : <i className="fa-regular fa-moon"></i>}
                        </div>

                    </div>
                </nav>
            </section> */}
            {/* <div>
                <div className='list-div'>
                    <div onClick={() => setCom(About)}>About</div>
                    <div onClick={() => setCom(Hero)}>Portfolio</div>
                    <div onClick={() => setCom(Footer)}>Testimonial</div>
                    <div onClick={() => setCom(Contact)}>Contact</div>
                </div>
            </div> */}
        </>

    )
}

export default Navbar
