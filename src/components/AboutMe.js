import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faLaptop, faEye, faPhone, faCamera } from '@fortawesome/free-solid-svg-icons';
import signature from "./signature-white.png"
import React, { useState } from 'react';
import "../App.css"
import OurClients from '../utilities/OurClients';
import Testimonials from '../utilities/Testimonials';
import OffcanvasSidebar from '../utilities/OffcanvasSidebar';
import NavBar from '../utilities/NavBar';






function AboutMe() {

    const [show, setShow] = useState(false);

    return (
        <>
            <div id="top" className="container-fluid" >
                <div className="row">
                    {/* Sidebar */}
                    <NavBar />


                    {/* Main Content */}
                    <div id="main" className="col-10 text-white offset-2" style={{ backgroundColor: "#2C2D2F" }}>
                        <div id="myName" className="header-mobile bg-primary">

                            <h2 id="name" className='text-center' style={{ marginLeft: "200px" }}>Philip Watson</h2>

                            <div>
                                <input type="checkbox" id="check" onClick={() => setShow(true)} />

                                <label for="check" id='checkButton'>
                                    <span id='bars'><FontAwesomeIcon icon={faBars} className='p-2'></FontAwesomeIcon></span>
                                </label>
                            </div>


                        </div>

                        <div className='p-5'>
                            <div className='page-heading d-flex justify-content-between align-items-center'>
                                <span className='fw-bold text-primary' style={{
                                    fontSize: '42px',

                                }} >About me</span> <span> <FontAwesomeIcon icon={faUser} className='text-primary' style={{
                                    fontSize: '42px',
                                }} /></span>
                            </div>

                            {/* <div style={{
                                border: "1px solid black", marginTop: "10px", marginBottom: "40px"    }}>

                            </div> */}

                            {/* about info */}

                            <div className='row'>
                                <div className='col-lg-8'>
                                    <h3 class="mb-20">UI/UX Designer & Developer</h3>
                                    <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                                    <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
                                    <div className='w-50'>
                                        <img src={signature} alt="" />
                                    </div>

                                </div>


                                <div class="col-lg-4">
                                    <div class="about-info">
                                        <h3 class="mb-20">Personal Information</h3>
                                        <ul className='list-unstyled'>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Name</span><span class="value">: Philip Watson</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Age</span><span class="value">: 26 Years</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Residence</span><span class="value">: New York, USA</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Address</span><span class="value">: 123 Lorem Ipsum</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Email</span><span class="value">: example@example.com</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Phone</span><span class="value">: (+1) 123 456 7890</span></li>
                                            <li><span className='fw-bold fs-5 text-white border-bottom border-primary d-inline-block me-1 pb-1'>Freelance</span><span class="value">: Available</span></li>
                                        </ul>
                                        <div className="p-1 pe-2 border rounded">
                                            <a className="btn btn-main text-primary" href=" ">
                                                Download Resume
                                            </a>
                                        </div>


                                    </div>
                                </div>
                            </div>



                            {/* <!--Services Row Start--> */}
                            <div className="row services mb-30" style={{ marginTop: "75px" }}>
                                <div className="col-md-12">
                                    <div className="subheading text-center m-3">
                                        <h3>Services</h3>
                                    </div>
                                </div>

                                {/* <!--Service Item--> */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="service-item">
                                        <div className="fs-1 text-center" > <FontAwesomeIcon icon={faLaptop} className='me-2' /></div>
                                        <h4>Web Development</h4>
                                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                                    </div>
                                </div>

                                {/* <!--Service Item--> */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="service-item">
                                        <div className="fs-1 text-center"><FontAwesomeIcon icon={faEye} className='me-2' /></div>
                                        <h4>Web Design</h4>
                                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                                    </div>
                                </div>

                                {/* <!--Service Item--> */}
                                <div className="col-lg-3 col-sm-6">
                                    <div cclassNamelass="service-item">
                                        <div className="fs-1 text-center"><FontAwesomeIcon icon={faPhone} className='me-2' /></div>
                                        <h4>Responsive Design</h4>
                                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                                    </div>
                                </div>

                                {/* <!--Service Item--> */}
                                <div class="col-lg-3 col-sm-6">
                                    <div class="service-item text-center">
                                        <div class="fs-1 text-center"><FontAwesomeIcon icon={faCamera} className='me-2' /></div>
                                        <h4>Photography</h4>
                                        <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut libero.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Services Row End--> */}

                            <div>
                                <OurClients />

                            </div>

                            <div>
                                <Testimonials />
                            </div>

                        </div>

                    </div>
                </div>


                <OffcanvasSidebar show={show} handleClose={() => setShow(false)} />

            </div>
            {/* </div > */}
        </>
    )
}

export default AboutMe
