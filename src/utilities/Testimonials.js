import React from 'react';
import "../App.css"
import author1 from "./author-images/author-1.jpg"
import author2 from "./author-images/author-2.jpg"
import author3 from "./author-images/author-3.jpg"
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css'; // Import the Flickity styles
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Testimonials() {

    const flickityOptions = {
        initialIndex: 2,
        // wrapAround: true,
        autoPlay: 3000, // Adjust the autoplay speed as needed
        pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        cellAlign: 'center',
        pageDots: false,
        groupCells: 2,

    };
    return (
        <div>
            <div className="row testimonials mb-50" style={{ marginTop: "35px" }}>
                <div className="col-md-12">
                    <div className="subheading text-center m-3">
                        <h3>Testimonials</h3>
                    </div>
                    <Flickity className="owl-carousel owl-theme mt-3" options={flickityOptions}>

                        {/* <!--Testimonail Item--> */}
                        <div className="testimonial-item" style={{marginRight:"30px"}}>
                            <div className="testimonial-content bg-dark mb-3" style={{ display: "flex", alignItems: "center", width: "500px", height: "150px", padding: "10px", WebkitBorderRadius: "70px 0 70px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }}>
                                <FontAwesomeIcon icon={faQuoteLeft} className='text-primary' style={{ marginRight: "10px", fontSize: "100px" }}></FontAwesomeIcon>
                                <div>
                                    <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>

                                </div>
                            </div>

                            <div className="testimonial-meta">

                                <img src={author1} alt="" className="" style={{ width2: "60px", height: "60px", float: "left", WebkitBorderRadius: "20px 0 20px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }} />
                                <div className="meta-info">
                                    <h4>Kate Fox</h4>
                                    <p>Digital Marketing Executive</p>
                                </div>
                            </div>
                        </div>


                        {/* <!--Testimonail Item--> */}
                        <div className="testimonial-item " style={{marginRight:"30px"}}>
                            <div className="testimonial-content bg-dark mb-3" style={{ display: "flex", alignItems: "center", width: "500px", height: "150px", padding: "10px", WebkitBorderRadius: "70px 0 70px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }}>
                                <FontAwesomeIcon icon={faQuoteLeft} className='text-primary' style={{ marginRight: "10px", fontSize: "100px" }}></FontAwesomeIcon>
                                <div>
                                    <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>

                                </div>
                            </div>

                            <div className="testimonial-meta">

                                <img src={author2} alt="" className="" style={{ width2: "60px", height: "60px", float: "left", WebkitBorderRadius: "20px 0 20px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }} />
                                <div className="meta-info">
                                    <h4>Emma Jones</h4>
                                    <p>Creative Director</p>
                                </div>
                            </div>
                        </div>


                        {/* <!--Testimonail Item-->  */}
                        <div className="testimonial-item " style={{marginRight:"30px"}}>
                            <div className="testimonial-content bg-dark mb-3" style={{ display: "flex", alignItems: "center", width: "500px", height: "150px", padding: "10px", WebkitBorderRadius: "70px 0 70px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }}>
                                <FontAwesomeIcon icon={faQuoteLeft} className='text-primary' style={{ marginRight: "10px", fontSize: "100px" }}></FontAwesomeIcon>
                                <div>
                                    <p>Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit. Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.</p>

                                </div>
                            </div>

                            <div className="testimonial-meta">

                                <img src={author3} alt="" className="" style={{ width2: "60px", height: "60px", float: "left", WebkitBorderRadius: "20px 0 20px 0", borderRadius: "20px 0 20px 0", marginRight: "10px" }} />
                                <div className="meta-info">
                                    <h4>Jack Smith</h4>
                                    <p>Marketing Director</p>
                                </div>
                            </div>
                        </div>


                    </Flickity>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
