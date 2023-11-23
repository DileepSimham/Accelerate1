import React, { useState } from 'react'
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OffcanvasSidebar from '../utilities/OffcanvasSidebar';

function Contact() {
    const [show, setShow] = useState(false);

    return (

        <div id="main" className="col-10 offset-2 text-white" style={{ backgroundColor: "#2C2D2F" }}>
            <div id="myName" className="header-mobile bg-primary">

                <h2 id="name" className='text-center' style={{ marginLeft: "200px" }}>Philip Watson</h2>

                <div>
                    <input type="checkbox" id="check" onClick={() => setShow(true)} />

                    <label for="check" id='checkButton'>
                        <span id='bars'><FontAwesomeIcon icon={faBars} className='p-2'></FontAwesomeIcon></span>
                    </label>
                </div>


            </div>




            <div className=' h-100 text-white d-flex flex-column w-100'>
                <div className='page-heading d-flex justify-content-between align-items-center'>
                    <span className='fw-bold text-primary' style={{
                        fontSize: '42px',

                    }} >About me</span> <span> <FontAwesomeIcon icon={faEnvelope} className='text-primary' style={{
                        fontSize: '42px',
                    }} /></span>
                </div>


                <div class="subheading">
                    <h3>Let's Talk</h3>
                </div>
                <div className="comment-form text-white col-lg-8 offset-lg-2 mx-auto" style={{ width: "700px" }}>

                    <h4 style={{ marginBottom: "50px", marginTop: "50px" }}>Leave A Reply</h4>
                    <form action="#">

                        <div className="row">
                            {/* Name Field */}
                            <div className="col-md-6 mb-5">
                                <div className="input">
                                    <input className="form-control input__field bg-dark text-white" type="text" id="name" name="name" required />
                                    <label className="input__label" htmlFor="name">Name</label>
                                </div>
                            </div>

                            {/* Email Field */}
                            <div className="col-md-6 mb-5">
                                <div className="input">
                                    <input className="form-control input__field bg-dark text-white" type="text" id="email" name="email" required />
                                    <label className="input__label" htmlFor="email">Email</label>
                                </div>
                            </div>

                            {/* Message Box */}
                            <div className="col-md-12 mb-5">
                                <div className="input">
                                    <textarea className="form-control input__field bg-dark text-white" id="message" name="message" rows="5" required></textarea>
                                    <label className="input__label" htmlFor="message">Your Comment</label>
                                </div>
                            </div>

                            <div className="col-md-12 text-primary border border-box w-25 border-primary mb-5 " style={{ marginLeft: "10px" }}>
                                <button className="btn btn-main text-primary m">Post Comment</button>
                            </div>

                            {/* Submit Button */}


                        </div>



                    </form>




                </div>


                <div className="row contact-info text-white" style={{ marginBottom: "40px", marginLeft: "200px" }}>

                    {/* <!--Contact Info Item--> */}
                    <div className="col-md-4 info-item" >
                        <span className="icon"><i className="fas fa-paper-plane"></i></span>
                        <h5 ><a href="mailto:example@example.com " style={{ textDecoration: "none" }}>example@example.com</a></h5>
                    </div>

                    {/* <!--Contact Info Item--> */}
                    <div className="col-md-4 info-item">
                        <span className="icon"><i class="fas fa-map-marker-alt"></i></span>
                        <h5>123 Lorem Ipsum, USA</h5>
                    </div>

                    {/* <!--Contact Info Item--> */}
                    <div className="col-md-4 info-item">
                        <span className="icon"><i className="fas fa-phone"></i></span>
                        <h5>(+1) 123 456 7890</h5>
                    </div>

                </div>
            </div>

            <OffcanvasSidebar show={show} handleClose={() => setShow(false)} />
        </div>
    )
}

export default Contact
