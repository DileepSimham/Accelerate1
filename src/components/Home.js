import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import img2 from "./bg.jpg"
import React, { useState } from 'react';
import "../App.css"
import OffcanvasSidebar from '../utilities/OffcanvasSidebar';
import NavBar from '../utilities/NavBar';



function Home() {

    const [show, setShow] = useState(false);

    const [text] = useTypewriter({
        words: [' Graphics Designer', ' Freelancer', ' Web Developer', ' UI/UX Designer'],
        loop: {},
        typeSpeed: 20,
        deleteSpeed: 20,
    })




    // main content styles
    const [styleOne, setStyleOne] = useState({
        fontWeight: 'bold',
        fontSize: '4rem',
        fontFamily: 'cursive'
    })


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <NavBar />

                    {/* Main Content */}
                    <div id="main" className="col-10 px-md-4 m-0 p-0 vh-100 w-100 offset-2 " style={{ overflow: 'hidden', background: `url(${img2}) no-repeat center center fixed`, backgroundSize: 'cover' }}>
                        <div id="myName" className="header-mobile bg-primary">

                            <h2 id="name" className='text-center' style={{ marginLeft: "200px" }}>Philip Watson</h2>

                            <div>
                                <input type="checkbox" id="check" onClick={() => setShow(true)} />

                                <label for="check" id='checkButton'>
                                    <span id='bars'><FontAwesomeIcon icon={faBars} className='p-2'></FontAwesomeIcon></span>
                                </label>
                            </div>


                        </div>


                        <div className="text-center d-flex align-items-center justify-content-center flex-column" style={{ marginTop: "200px" }}>
                            <div id="name2"><span style={{ ...styleOne, color: 'white' }}>DILEEP </span><span style={{ ...styleOne, color: '#204cc7' }}>SIMHAM</span></div>

                            <h2 style={{ margin: '50px', color: 'white' }}>
                                I am a
                                <span style={{ fontWeight: 'bold', color: 'white ' }}>
                                    {text}
                                </span>
                                <span style={{ color: 'white' }}>
                                    <Cursor />
                                </span>
                            </h2>
                        </div>
                    </div>


                    <OffcanvasSidebar show={show} handleClose={() => setShow(false)} />

                </div>
            </div>
        </>
    );
}

export default Home;
