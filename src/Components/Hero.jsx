import React from 'react';
import TypedAnimation from './TypedAnimation';

const Hero = () => {
    return (
        <header>
            <section className='hero-section' id='hero'>
                <div className="container h-100">

                    <div className='row'>
                        <div className=' col-0 col-lg-6'></div>
                        <div className=' col-12 col-lg-6'><br /></div>
                    </div>
                    <div className='row h-100 hero-rowdiv'>
                        <div className='col-12 col-lg-6 tex-cen'>
                            <div className='tex-indiv'>
                                <h1>Hey, I am <span>Sachin Kumar </span></h1>
                                <h1 className=' d-flex'><TypedAnimation /></h1>

                                <p className='hero-tagline'>A Passionate Front-End Developer</p>
                                <p className='hero-description'>
                                    Crafting immersive and responsive web experiences with a love for clean and efficient code.
                                    Transforming ideas into pixel-perfect, user-friendly interfaces that leave a lasting impression.
                                    Continuously exploring new technologies to stay at the forefront of the ever-evolving web development landscape.
                                </p>
                                <div className='hero-button'>Hire Me</div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 h-100'>
                            <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
                                <figure className=' hero-figure'>
                                    <img className='img-fluid hero-img' src="Images/groot.jpg" alt="groot" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </header>
    )
}

export default Hero
