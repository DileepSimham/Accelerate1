import React from 'react'
import NavBar from '../utilities/NavBar'
import Blog from './Blog'

function BlogPage() {
    return (
        <>
            <div id="top" className="container-fluid">
                <div className="row">
                   <NavBar />
                   <Blog />
                </div>

            </div>

        </>
    )
}

export default BlogPage
