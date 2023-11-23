import React, { useState } from 'react'
import img1 from "./blogImages/img1.jpg"
import img2 from "./blogImages/img-2.jpg"
import img3 from "./blogImages/img-3.jpg"
import img4 from "./blogImages/img-4.jpg"
import img5 from "./blogImages/img-5.jpg"
import img6 from "./blogImages/img-6.jpg"
import img7 from "./blogImages/img-7.jpg"
import img8 from "./blogImages/img-8.jpg"
import img9 from "./blogImages/img-9.jpg"
import { faBook ,faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import OffcanvasSidebar from '../utilities/OffcanvasSidebar'

function Blog() {
    const [show, setShow] = useState(false);

    const blogData = [
        {
            id: 1,
            category: 'Web Design',
            title: 'Best Way to Design',
            date: 'August 15, 2018',
            image: img1,
            link: '/blog-dark'
        },
        {
            id: 2,
            category: 'Personal',
            title: 'Things I Need to Get Started',
            date: 'August 10, 2018',
            image: img2,
            link: '/blog-dark'
        },
        {
            id: 3,
            category: 'Design',
            title: 'My Current Workspace',
            date: 'August 4, 2018',
            image: img3,
            link: '/blog-dark'
        },
        {
            id: 4,
            category: 'Traveling',
            title: 'Best Place to Travel this Summer',
            date: 'July 28, 2018',
            image: img4,
            link: '/blog-dark'
        },
        {
            id: 5,
            category: 'Web Design',
            title: 'Latest UI Trends to Inspired From',
            date: 'July 25, 2018',
            image: img5,
            link: '/blog-dark'
        },
        {
            id: 6,
            category: 'Technology',
            title: 'Latest Tech 2018',
            date: 'July 19, 2018',
            image: img6,
            link: '/blog-dark'
        },
        {
            id: 7,
            category: 'LifeStyle',
            title: 'Best & Easy To Cook',
            date: 'July 10, 2018',
            image: img7,
            link: '/blog-dark'
        },
        {
            id: 8,
            category: 'Technology',
            title: 'Best Sound Editing Software',
            date: 'July 1, 2018',
            image: img8,
            link: '/blog-dark'
        },
        {
            id: 9,
            category: 'Traveling',
            title: 'Top Beaches in the World',
            date: 'June 24, 2018',
            image: img9,
            link: '/blog-dark'
        },
        // Add more blog entries as needed
    ];

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


            <section id="blog" className="blog-section pt-page p-5" style={{ backgroundColor: "#2C2D2F" }}>
                <div className="section-container">

                    {/* <!--Page Heading--> */}
                    <div className='page-heading d-flex justify-content-between align-items-center'>
                        <span className='fw-bold text-primary' style={{
                            fontSize: '42px',

                        }} >About me</span> <span> <FontAwesomeIcon icon={faBook} className='text-primary' style={{
                            fontSize: '42px',
                        }} /></span>
                    </div>
                    <div className="row blogs-masonry">
                        {blogData.map(blog => (
                            <div key={blog.id} className="col-lg-4 col-sm-6">
                                <Link to="/blogExtended" className='blog-item position-relative d-block bg-dark border border-dark mb-5 overflow-hidden' style={{ textDecoration: "none" }}  >
                                    <div className="blog-image">
                                        <img src={blog.image} alt="#" />
                                    </div>
                                    <div className="blog-content p-4 text-center w-75 position-relative bg-dark mx-auto mt-n4" style={{ marginTop: "-40px" }}>
                                        <span className="cat text-primary mb-2 text-uppercase fs-6 fw-bold letter-spacing-1.5">{blog.category}</span>
                                        <h4 className="blog-title text-white mb-1 fs-5 letter-spacing-0.5 text-capitalize">{blog.title}</h4>
                                        <div className="blog-date font-serif font-italic text-white fs-6">{blog.date}</div>
                                    </div>
                                </Link >
                            </div>
                        ))}
                    </div>



                </div>
            </section>

            <OffcanvasSidebar show={show} handleClose={() => setShow(false)} />
        </div>
    )
}

export default Blog
