import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faIdCard, faBriefcase, faBook, faEnvelope, faLaptop, faEye, faPhone, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faYoutube, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img1 from "./me.jpg"
import img2 from "./bg.jpg"
import me2 from "./me2.jpg"
import signature from "./signature-white.png"
import React, { useEffect, useState } from 'react';
import "../App.css"
import OurClients from '../utilities/OurClients';
import Testimonials from '../utilities/Testimonials';
import { Link } from 'react-router-dom';


function AboutMe() {
    const [text] = useTypewriter({
        words: [' Graphics Designer', ' Freelancer', ' Web Developer', ' UI/UX Designer'],
        loop: {},
        typeSpeed: 20,
        deleteSpeed: 20,
    })

    const customTextColorStyle = {
        color: '##cfd8e8',
        backgroundColor: '#17181B',
    };

    const textColor = {
        color: '#b6c2d6',
        fontSize: '12px',
        fontWeight: 'normal',
        padding: '15px 0',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        marginLeft: '50px'
    }

    const [highlightedElement, setHighlightedElement] = useState(null);

    const highlight = (arg) => {
        const element = document.getElementById(arg);

        if (highlightedElement) {
            // Revert styles of the previously highlighted element
            highlightedElement.style.fontWeight = 'normal';
            highlightedElement.style.color = textColor.color;
        }

        if (element !== highlightedElement) {
            // Highlight the new element
            element.style.fontWeight = 'bold';
            element.style.color = 'white';
            setHighlightedElement(element);
        } else {
            // If clicking on the same element, revert styles
            setHighlightedElement(null);
        }
    };

    const [sidebarVisible, setSidebarVisible] = useState(window.innerWidth > 750);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    const handleWindowResize = () => {
        setSidebarVisible(window.innerWidth > 750);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);
    return (
        <>
            <div className="container-fluid">
                {/* Responsive Menu Icon */}
                {/* <div className={`${!sidebarVisible ? 'cursor-pointer' : 'd-none'} float-end`} onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} className="me-2" />
        </div> */}

                <div className="row">
                    {/* Sidebar */}
                    <nav id="sidebar" className="col-2 vh-100 p-0 position-fixed overflow-auto" style={{ ...customTextColorStyle, maxWidth: '50%' }}>
                        {/* Your content here */}
                        <div className="position-sticky">
                            <div className="sidebar-image position-relative">
                                <img src={me2} className="w-100 h-100" alt="sorry" />
                                <div className="bg-primary bg-opacity-75 w-100 p-2 position-absolute bottom-0 start-50 translate-middle-x text-center text-white">
                                    <h2 className="header-name fs-5">
                                        Dileep Simham
                                    </h2>
                                </div>
                            </div>
                            <ul className="nav flex-column list" mb-5>
                                <li className="nav-item" onClick={() => highlight("home")}>
                                    <Link to="/" className="nav-link" id="home" style={textColor}>
                                        <FontAwesomeIcon icon={faHome} className='me-2' /> Home
                                    </Link>
                                    <div className="line"></div>
                                </li>
                                <li className="nav-item" onClick={() => highlight("about")}>
                                    <Link to='/aboutme' className="nav-link" id="about"  style={textColor}>
                                        <FontAwesomeIcon icon={faUser} className='me-2' /> About Me
                                    </Link>
                                    <div className="line"></div>
                                </li>
                                <li className="nav-item" onClick={() => highlight("resume")}>
                                    <Link to="/resume" className="nav-link " id="resume"  style={textColor}>
                                        <FontAwesomeIcon icon={faIdCard} className='me-2' /> Resume
                                    </Link>
                                    <div className="line"></div>
                                </li>
                                <li className="nav-item" onClick={() => highlight("portfolio")}>
                                    <a className="nav-link " id="portfolio" href="#contact" style={textColor}>
                                        <FontAwesomeIcon icon={faBriefcase} className='me-2' /> Portfolio
                                    </a>
                                    <div className="line"></div>
                                </li>
                                <li className="nav-item" onClick={() => highlight("blog")}>
                                    <a className="nav-link " id="blog" href="#contact" style={textColor}>
                                        <FontAwesomeIcon icon={faBook} className='me-2' /> Blog
                                    </a>
                                    <div className="line"></div>
                                </li>
                                <li className="nav-item" onClick={() => highlight("contact")}>
                                    <a className="nav-link " id="contact" href="#contact" style={textColor}>
                                        <FontAwesomeIcon icon={faEnvelope} className='me-2' /> Contact
                                    </a>
                                    <div className="line"></div>
                                </li>
                            </ul>
                            <div className="mt-5 text-center text-white fw-light">
                                <div className="social-icons mb-2 mt-5">
                                    <FontAwesomeIcon icon={faFacebookSquare} className='me-2 fw-light' />
                                    <FontAwesomeIcon icon={faTwitter} className='me-2' />
                                    <FontAwesomeIcon icon={faYoutube} className='me-2' />
                                    <FontAwesomeIcon icon={faDribbble} className='me-2' />
                                    <FontAwesomeIcon icon={faBehance} className='me-2' />
                                </div>
                                <div className="copy mb-0">
                                    <p>2021 &copy; Cosmos-Themes.<br />All Right Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/* Main Content */}
                    <div id="main" className="col-10 offset-2 text-white" style={{ backgroundColor: "#2C2D2F" }}>
                        <div className='p-5'>
                            <div className='page-heading'>
                                <span className='fw-bold text-primary' style={{ fontSize: '42px' }}>About me</span> <span> <FontAwesomeIcon icon={faUser} className='text-primary' style={{ fontSize: '42px', marginLeft: "850px" }} /></span>
                            </div>

                            <div style={{ border: "1px solid black", marginTop: "10px", marginBottom: "40px" }}>

                            </div>

                            {/* about info */}

                            <div className='row'>
                                <div className='col-8'>
                                    <h3 class="mb-20">UI/UX Designer & Developer</h3>
                                    <p>Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat placeat quas consequatur? Obcaecati natus rerum</p>
                                    <p>Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab consequatur?</p>
                                    <div className='w-50'>
                                        <img src={signature} alt="" />
                                    </div>

                                </div>


                                <div class="col-4">
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


            </div>
            {/* </div > */}
        </>
    )
}

export default AboutMe
