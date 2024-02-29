import React from 'react'
import TypedAnimation from './TypedAnimation';

const Hero = (props) => {
    return (
        <>
            <section className='for-height' style={{ backgroundColor: props.color }} id={props.id}>
                <div className="container h-100">
                    <div className='row h-100'>
                        <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
                            <h2>Hii, My name is <span style={{ color: "#FC5130" }}>Sachin Kumar</span></h2>
                            <h4>I'm a <span style={{ color: "#FC5130" }}><TypedAnimation /></span></h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
