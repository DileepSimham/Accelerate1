import React, { useState } from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook } from '@fortawesome/free-solid-svg-icons';
import OffcanvasSidebar from './OffcanvasSidebar';



function Resume() {
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


            <section id="resume" className="resume-section pt-page p-4" >
                <div className="section-container">
                    <div className='page-heading d-flex justify-content-between align-items-center'>
                        <span className='fw-bold text-primary' style={{
                            fontSize: '42px',

                        }} >About me</span> <span> <FontAwesomeIcon icon={faBook} className='text-primary' style={{
                            fontSize: '42px',
                        }} /></span>
                    </div>

                    {/* <!--Education & Experience Row Start--> */}
                    <div className="row mb-20">

                        {/* <!--Experience Column Start--> */}
                        <div className="col-lg-6">
                            <div className="subheading">
                                <h3>Experience</h3>
                            </div>
                            <ul className="experience list-unstyled">

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left bg-primary"></span>
                                    <div className="content">
                                        <h4>Lead UI Designer</h4>
                                        <h5>Big Design Company, NY, USA</h5>
                                        <p className="info">
                                            Sit cupiditate praesentium ex esse nulla Facere fuga perspiciatis eveniet provident neque Ea ratione non minus temporibus ipsum Sunt minima
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2018</span>
                                        <span className="from">2016</span>
                                    </span>
                                </li>

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web Designer</h4>
                                        <h5>Design Company, London, UK</h5>
                                        <p className="info">
                                            Dolor id atque accusantium ut impedit odit provident soluta voluptatem Veritatis ipsam neque mollitia vero suscipit a laborum doloremque. Ipsa!
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2016</span>
                                        <span className="from">2015</span>
                                    </span>
                                </li>

                                {/* <!--Experience Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web Developer</h4>
                                        <h5>Exis Development, London, UK</h5>
                                        <p className="info">
                                            Consectetur pariatur fugiat ipsam aperiam maiores. Nisi in dignissimos debitis expedita asperiores delectus vitae corporis.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2015</span>
                                        <span className="from">2014</span>
                                    </span>
                                </li>

                            </ul>
                        </div>
                        {/* <!--Experience Column End--> */}

                        {/* <!--Education Column Start--> */}
                        <div className="col-lg-6">
                            <div className="subheading">
                                <h3>Education</h3>
                            </div>

                            <ul className="education list-unstyled">

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>MA Graphics</h4>
                                        <h5>Royal College of Art, London, UK</h5>
                                        <p className="info">
                                            Consectetur mollitia amet inventore nisi sed. Provident veritatis exercitationem eum doloremque itaque expedita? Ex voluptatem nostrum numquam illum.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2014</span>
                                        <span className="from">2013</span>
                                    </span>
                                </li>

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>BA(HONS) Graphics</h4>
                                        <h5>Central Saint Martins, London, UK</h5>
                                        <p className="info">
                                            Elit voluptatibus quas necessitatibus ullam tenetur provident voluptatibus. Ratione delectus lorem minus ipsa architecto. Saepe officiis sint adipisci.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2013</span>
                                        <span className="from">2012</span>
                                    </span>
                                </li>

                                {/* <!--Education Item--> */}
                                <li>
                                    <span className="line-left"></span>
                                    <div className="content">
                                        <h4>Web & Graphics Diploma</h4>
                                        <h5>Tech Arts Institute, CA, USA</h5>
                                        <p className="info">
                                            Ipsum ex exercitationem est aliquid eos saepe. Dolorum aperiam cupiditate labore vero deleniti Aut unde deserunt neque voluptas.
                                        </p>
                                    </div>
                                    <span className="year">
                                        <span className="to">2012</span>
                                        <span className="from">2011</span>
                                    </span>
                                </li>

                            </ul>
                        </div>
                        {/* <!--Education Column End--> */}

                    </div>
                    {/* <!--Education & Experience Row End--> */}


                    {/* <!--Skills Row Start--> */}
                    <div className="row">

                        {/* <!--Design Skills Column Start--> */}
                        <div className="col-lg-6 skills">
                            <div className="subheading">
                                <h3>Design Skills</h3>
                            </div>

                            {/* <!--Design Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">Coral Draw</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="91">
                                        <div className="progress-value">91%</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Design Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">Photoshop</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="82">
                                        <div className="progress-value">82%</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Design Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">Illustrator</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="94">
                                        <div className="progress-value">94%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Design Skills Column End--> */}

                        {/* <!--Coding Skills Column Start--> */}
                        <div className="col-lg-6 skills">
                            <div className="subheading">
                                <h3>Coding Skills</h3>
                            </div>

                            {/* <!--Coding Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">HTML5</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="83">
                                        <div className="progress-value">83%</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Coding Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">CSS3</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="75">
                                        <div className="progress-value">75%</div>
                                    </div>
                                </div>
                            </div>

                            {/* <!--Coding Skill Item--> */}
                            <div className="skill-item">
                                <h4 className="progress-title">Javascript</h4>
                                <div className="progress">
                                    <div className="progress-bar" data-progress-value="92">
                                        <div className="progress-value">92%</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <!--Coding Skills Column End--> */}

                    </div>
                    {/* <!--Skills Row End--> */}
                </div>
            </section>
            {/* <!--Resume Section End-->  */}

            <OffcanvasSidebar show={show} handleClose={() => setShow(false)} />
        </div>

    )
}

export default Resume
