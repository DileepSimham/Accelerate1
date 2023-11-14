import React from 'react';
import "../App.css"
import client01 from "./client-images/client-01.png"
import client02 from "./client-images/client-02.png"
import client03 from "./client-images/client-03.png"
import client04 from "./client-images/client-04.png"
import client05 from "./client-images/client-05.png"
import client06 from "./client-images/client-06.png"
import client07 from "./client-images/client-07.png"
import client08 from "./client-images/client-09.png"
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css'; // Import the Flickity styles
function OurClients() {

    const flickityOptions = {
        initialIndex: 4,
        wrapAround: true,
        contain:true,
        autoPlay: 2000, // Adjust the autoplay speed as needed
        pauseAutoPlayOnHover: false,
        prevNextButtons: false,
        cellAlign: 'center',
        pageDots: false,
        

    };
    return (
        <div>
            {/* <!--Clients Row Start--> */}
            <div className="row clients mb-70" style={{ marginTop: "75px" }}>
                <div className="col-md-12">
                    <div className="subheading text-center m-3">
                        <h3>Clients</h3>
                    </div>
                </div>

                <Flickity className="owl-carousel owl-theme mt-3" options={flickityOptions}>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client01} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client02} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo " style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client03} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client04} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client05} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client06} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client07} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    <div className="client-logo" style={{ marginRight: "60px" }}>
                        <a href=" /">
                            <img src={client08} alt="" />
                        </a>
                    </div>

                    {/* <!--Client Logo--> */}
                    {/* <div className="client-logo">
                        <a href=" /">
                            <img src={client08} alt="" />
                        </a>
                    </div> */}

                </Flickity>
            </div>
            {/* <!--Clients Row End--> */}

        </div>
    )
}

export default OurClients
