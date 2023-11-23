import React from 'react'
import NavBar from '../utilities/NavBar'
import Contact from './Contact'

function ContactPage() {
    return (
        <>
            <div id="top" className="container-fluid">
                <div className="row">
                    <NavBar />
                    <Contact />
                </div>

            </div>

        </>
    )
}

export default ContactPage
