import React from 'react'
import NavBar from '../utilities/NavBar'
import Resume from '../utilities/Resume'
function ResumePage() {
    return (
        <>
            <div id="top" className="container-fluid">
                <div className="row">
                    <NavBar />
                    <Resume />
                </div>

            </div>

        </>
    )
}

export default ResumePage
