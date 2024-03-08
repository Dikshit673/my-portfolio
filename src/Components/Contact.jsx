import React, { useState } from 'react'

const Contact = () => {

    const [userData, setUserdata] = useState({
        fullName: "",
        email: "",
        message: "",
    });

    const postUserdata = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setUserdata((preValue) => {
            return { ...preValue, [name]: value };
        })
    };

    const submitData = (e) => {
        e.preventDefault();
        setUserdata({
            fullName: "",
            email: "",
            message: "",
        });
        // const { fullName, email, message } = userData;
    }

    return (
        <>
            <section className='contact-section' id='contact'>
                <div className=' container h-100 '>

                    <div className='row'>
                        <div className=' col-0 col-lg-5'></div>
                        <div className=' col-12 col-lg-7'>
                            <h1 className='contact-main-h1 mb-5'>Contact</h1>
                        </div>
                    </div>

                    <div className='row h-100'>
                        <div className=' co-12 col-lg-5 contact-left-div'>
                            <div className='w-100 h-100'>
                                <div className='contact-heading-margin'>
                                    <h2>Let's Chat</h2>
                                </div>
                                <div>
                                    <p className='contact-tagline'>Let's create something together🤟</p>
                                </div>

                                <div>
                                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi, maxime sit ipsa modi doloribus vel tempore nulla numquam ea.</p>
                                </div>

                                <div className=' d-flex justify-content-center'>
                                    <div className="row contact-width-control1">
                                        <div className='col-2 contact-iconfont'>
                                            <div className='contact-icon-div2'>
                                                <i className="fa-regular fa-envelope"></i>
                                            </div>
                                        </div>
                                        <div className='col-10'>
                                            <p className='mb-0'>Mail me at</p>
                                            <p className='mb-0 contact-mail'>Contact@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' contact-main-control'>
                                    <div className="row mt-3 contact-width-control2">
                                        <div className='col-12'>
                                            <div className='contact-icon-div3'>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://twitter.com/SachinK45099263" target="_sachin" aria-label="SachinK45099263">
                                                        <i className=" fab fa-twitter contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.facebook.com/sachin.fandan.146" target="_sachin" aria-label="sachin.fandan.146">
                                                        <i className=" fab fa-facebook contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.instagram.com/sachin.kumar_1905_/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                        <i className=" fab fa-instagram contact-transform"></i>
                                                    </a>
                                                </div>
                                                <div className='contact-icons-shape'>
                                                    <a href="https://www.linkedin.com/in/sachin-kumar-7606742a7/" target="_sachin" aria-label="sachin.kumar_1905_">
                                                        <i className="fa-brands fa-linkedin contact-transform"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=' co-12 col-lg-7 h-100 d-flex align-items-center'>
                            <div className='w-100'>
                                <form>
                                    <div>
                                        <div>
                                            <input type='text' name='fullName' id='' placeholder='First Name' autoComplete='off' className=' input-fields ' maxLength={50} onChange={postUserdata} value={userData.fullName} />
                                        </div>
                                        <div>
                                            <input type='text' name='email' id='' placeholder='Email' autoComplete='nope' className='input-fields ' maxLength={50} onChange={postUserdata} value={userData.email} />
                                        </div>
                                        <div>
                                            <textarea type='text' name='message' id='' placeholder='Write your message...' autoComplete='off' className=' input-fields textarea-my' onChange={postUserdata} value={userData.message} />
                                        </div>
                                        <div>
                                            <button type='submit' className=' w-100 contact-submit-btn' onClick={submitData}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
