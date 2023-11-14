import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUser, faIdCard, faBriefcase, faBook, faEnvelope, faLaptop, faEye, faPhone, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faYoutube, faDribbble, faBehance } from '@fortawesome/free-brands-svg-icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img1 from "../components/me.jpg"
import img2 from "../components/bg.jpg"
import me2 from "../components/me2.jpg"
import signature from "../components/signature-white.png"
import React, { useEffect, useState } from 'react';
import "../App.css"
import OurClients from '../utilities/OurClients';
import Testimonials from '../utilities/Testimonials';
import { Link } from 'react-router-dom';

function NavBar() {
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
                        <Link to='aboutme' className="nav-link" id="about" style={textColor}>
                            <FontAwesomeIcon icon={faUser} className='me-2' /> About Me
                        </Link>
                        <div className="line"></div>
                    </li>
                    <li className="nav-item" onClick={() => highlight("resume")}>
                        <a className="nav-link " id="resume" href="#resume" style={textColor}>
                            <FontAwesomeIcon icon={faIdCard} className='me-2' /> Resume
                        </a>
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
    )
}

export default NavBar
