import React, { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import style from "./blogs.module.scss";
import { setActiveNav } from '../../../ducks/nav';

// import { CgArrowUpO, CgChevronDoubleUp } from "react-icons/cg"
import { blogs } from "../../../data/blogs"
import { setBlog } from "../../../ducks/blog";



import { Link } from 'react-router-dom';

import {
  Navbar,
  Card
} from 'react-bootstrap'


const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  })
}

const Blogs = () => {

  const dispatch = useDispatch()

  const topOfScreenRef = useRef(null)

  console.log('blogs:', blogs[0].blog)

  return (
    <div ref={topOfScreenRef} className='blogContainer'>

      <Navbar sticky="top" bsPrefix='navbar' variant="dark" className={style.navbar}>
        <Navbar.Brand as={Link} to="/" className={style.navLink} onClick={() => dispatch(setActiveNav('Home'))} >Adam Capdeville</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.navbarToggle} />
      </Navbar>


      <div className={style.blogScreenTitle} >
        <div className={style.dotSlash}>./</div>
        Dev Blogs
      </div>

      <div className={style.heroImageContainer}>
        <img className={style.heroImage} src="https://i.imgur.com/Fyji2AK.jpeg"/>
      </div>
    
  
      <div className={style.blogList}>
        {blogs.map((blog, index) => (
          <div>
              <Link to="/blog" className={style.blogLink}>

                <Card key={index} className={style.blogCard} onClick={() => 
                  { 
                    scrollToRef(topOfScreenRef)
                    dispatch(setBlog(blog.blog))
                    dispatch(setActiveNav('Blog'))
                  }}
                  >
                    
                  <Card.Body>
                    <Card.Title className={style.blogCardTitle}><strong>{blog.title}</strong> </Card.Title>
                    <Card.Text> {blog.description} </Card.Text>
                    <Card.Subtitle className={style.blogCardDate}> {blog.date} </Card.Subtitle>
                  </Card.Body>

                </Card>


              </Link>
            <hr/>
          </div>
        ))}

      </div>



    </div>
  );
};

export default Blogs;
