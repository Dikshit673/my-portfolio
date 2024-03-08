import React from 'react'

const About = () => {
    return (
        <>
            <section className='about-section' id='about'>
                <div className="container h-100">
                    <div className='row'>

                        <div className=' col-0 col-lg-5'></div>

                        <div className=' col-12 col-lg-7'>
                            <h1 className='about-main-h1 mb-5'>About</h1>
                        </div>

                    </div>
                    <div className='row about-mainrow'>

                        <div className='col-12 col-lg-5 about-left-sectiondiv'>

                            <div className=' mt-5 d-flex justify-content-center'>
                                <figure>
                                    <img className='w-100 img-fluid' src="Images/devP1.jpeg" alt="devP1" />
                                </figure>
                            </div>

                            <div className='d-flex justify-content-center'>
                                <table >
                                    <tbody>
                                        <tr>
                                            <th>Name</th>
                                            <td>:</td>
                                            <td className=' ps-2'>Sachin Kumar</td>
                                        </tr>
                                        <tr>
                                            <th>10th</th>
                                            <td>:</td>
                                            <td className=' ps-2'>JNV Devrala</td>
                                        </tr>
                                        <tr>
                                            <th>12th</th>
                                            <td>:</td>
                                            <td className=' ps-2'>JNV Bundi</td>
                                        </tr>
                                        <tr>
                                            <th>B.Tech</th>
                                            <td>:</td>
                                            <td className=' ps-2'>IIT Roorkee</td>
                                        </tr>
                                        <tr>
                                            <th>Address</th>
                                            <td>:</td>
                                            <td className=' ps-2'>Bhiwani, Haryana</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className='col-12 col-lg-7'>
                            <div className='h-100 mt-4'>

                                <div className='mt-4 about-right-sectiondiv'>

                                    <h3>Hii, I'm Sachin Kumar</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Nostrum, ea molestiae? Corporis necessitatibus beatae totam possimus id voluptas sed provident quidem veniam natus,
                                        alias magnam vero ducimus quibusdam nemo numquam culpa repellendus voluptatum error deleniti atque illum. Mollitia minus maiores commodi,
                                        numquam adipisci repudiandae blanditiis ad totam. Magnam, illo ducimus!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About
