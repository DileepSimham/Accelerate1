import React from 'react'
import img1 from "./blogImages/blog-page-img.jpg"
import author1 from "./blogImages/author-1.jpg"
import author2 from "./blogImages/author-2.jpg"
import author3 from "./blogImages/author-3.jpg"

function BlogExtended() {
  const comments = [
    {
      id: 1,
      author: 'Jane Doe',
      date: 'June 10, 2018 at 5:39 am',
      content: 'Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko',
      image: author1,
    },
    {
      id: 2,
      author: 'Emma Doe',
      date: 'June 10, 2018 at 5:39 am',
      content: 'Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko',
      image: author2,
    },
    {
      id: 3,
      author: 'John Doe',
      date: 'June 10, 2018 at 5:39 am',
      content: 'Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie consequat flexitarian four loko',
      image: author3,
    },
  ];
  return (
    <div className='bg-dark h-100'>
      <div style={{ height: "500px" }}>
        <img src={img1} alt='' className='w-100 h-100'></img>
      </div>

      <div className='bg-dark w-50 mx-auto position-absolute top-10 start-50 translate-middle text-center p-3' style={{ marginTop: "-40px" }}>

        <h5 className='text-primary'>Fashion</h5>
        <h1 className='text-white'>Welcome to my blog</h1>
        <h5 className='text-white'>January 20, 2018</h5>
      </div>
      <div className='bg-dark text-white' style={{ margin: "100px", marginBottom: "0px" }}>
        <p>Consectetur rerum veniam vitae sequi voluptatibus unde soluta dolorum. Sint maxime ducimus tenetur vitae corrupti saepe.
          Veniam sit ea aliquid odit officiis. Quisquam at labore eum commodi in eius In quisquam a a eaque fuga?
          Debitis magnam deserunt libero voluptates esse at possimus? Voluptatum voluptates exercitationem voluptatum
          accusantium doloremque nihil, nihil molestias voluptatibus, minus nostrum, aliquid Quisquam neque fugiat quos
          veniam facere Dicta eaque laboriosam ut voluptas ipsum Officiis nisi maxime soluta optio ipsum quam Dolores
          aperiam explicabo sed quas unde laborum molestiae. Porro cum incidunt enim minus nisi excepturi rerum!
          Exercitationem quia excepturi reiciendis illum velit! Consequatur tempora nihil</p>

        <p>Sit exercitationem accusamus repudiandae libero natus vero aut Consectetur magni totam sint animi
          expedita? Eos consequatur facilis corrupti voluptatibus asperiores dolorum vitae ipsa laudantium
          repellat Voluptates voluptates corporis illum ut asperiores possimus officiis! Laborum rerum eaque
          minus harum doloremque debitis Ducimus sed commodi commodi illo aliquam. Magnam ipsa blanditiis b
          landitiis veniam aut Magni unde voluptates culpa dicta placeat! Incidunt delectus beatae excepturi
          perspiciatis libero praesentium illo Atque sit asperiores unde dolorem cupiditate, nostrum Alias
          illum voluptate eos commodi modi? Minus est fugiat labore earum obcaecati, omnis. Dicta fugit quod
          harum eius atque? Exercitationem impedit deleniti quidem voluptas eum cupiditate Consectetu r
        </p>

        <p className='fw-bold' style={{ fontFamily: "cursive" }}>
          luptates voluptates corporis illum ut asperiores possimus officiis! Laborum rerum eaque
          minus harum doloremque debitis Ducimus sed commodi commodi illo aliquam. Magnam ipsa blanditiis b
          landitiis veniam aut Magni unde voluptates culpa dicta placeat! Incidunt delectus beatae excepturi
          perspiciatis libero praesentium illo Atque sit asperiores unde dolorem cupiditate, nostrum Alias
          illum voluptate eos commodi modi?
        </p>



        <p> Consectetur omnis eveniet possimus est necessitatibus. Dolorum magnam officiis ad fugit cumque?
          Voluptatibus laboriosam incidunt voluptatum beatae dignissimos, nostrum iusto error Optio quam
          modi adipisci cumque delectus Voluptates iusto doloremque.
          Dolor amet culpa esse cum in? Id ab neque ipsa sapiente impedit doloremque quod. Velit veniam in
          odio voluptatem doloribus Minus laborum voluptates sed ea vel? Aspernatur in quos nulla veniam
          tempore In quibusdam reprehenderit maiores iste ab Est quae magni nemo repudiandae soluta? Eius
          qui veniam voluptatem iure molestiae</p>
      </div>


      {/* <!--Blog Comments Start--> */}
      <div className="blog-comments text-white col-md-8 offset-md-2" style={{ marginTop: "40px", marginLeft: "400px" }}>
        <h4 className="m-5" style={{ fontSize: "20px" }}>Post Comments</h4>
        <ul className="comment-list list-unstyled">
          {comments.map(comment => (
            <li key={comment.id} className="comment pb-3 mb-3 border-bottom border-dotted " style={{ width: "700px" }}>
              <div className="d-flex align-items-start">
                <div className="author-img float-left mr-3">
                  <img className='rounded-circle max-width-70' src={comment.image} alt="" />
                </div>
                <div className="comment-text overflow-hidden" style={{ marginLeft: "30px" }}>
                  <span className="reply float-end"><a className='badge bg-light text-dark rounded-pill' style={{ textDecoration: "none" }} href="#">Reply</a></span>
                  <h6 className="author text-uppercase fw-bold" style={{ fontSize: "16px", letterSpacing: "1px", marginBottom: "7px" }}>{comment.author}</h6>
                  <span className="date">{comment.date}</span>
                  <p>{comment.content}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <!--Blog Comments End--> */}


      <div className="comment-form text-white col-lg-8 offset-lg-2 mx-auto" style={{ width: "700px" }}>

        <h4 className="mt-40 mb-50" style={{ marginBottom: "50px", marginTop: "50px" }}>Leave A Reply</h4>
        <form action="#">

          <div className="row">
            {/* Name Field */}
            <div className="col-md-6 mb-5">
              <div className="input">
                <input className="form-control input__field bg-dark text-white" type="text" id="name" name="name" required />
                <label className="input__label" htmlFor="name">Name</label>
              </div>
            </div>

            {/* Email Field */}
            <div className="col-md-6 mb-5">
              <div className="input">
                <input className="form-control input__field bg-dark text-white" type="text" id="email" name="email" required />
                <label className="input__label" htmlFor="email">Email</label>
              </div>
            </div>

            {/* Message Box */}
            <div className="col-md-12 mb-5">
              <div className="input">
                <textarea className="form-control input__field bg-dark text-white" id="message" name="message" rows="5" required></textarea>
                <label className="input__label" htmlFor="message">Your Comment</label>
              </div>
            </div>

            <div className="col-md-12 text-primary border border-box w-25 border-primary mb-5 " style={{ marginLeft: "10px" }}>
              <button className="btn btn-main text-primary m">Post Comment</button>
            </div>

            {/* Submit Button */}


          </div>



        </form>




      </div>







    </div >
  )
}

export default BlogExtended
