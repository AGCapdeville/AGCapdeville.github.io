import React, { useState, useRef, useEffect } from 'react'
import style from "./blog.module.scss";

import { useDispatch } from 'react-redux'
import { setActiveNav } from '../../../ducks/nav';
import { useBlog, setBlog } from '../../../ducks/blog';
import { blogs } from '../../../data/blogs'

import {
    Navbar,
    Card
} from 'react-bootstrap'

import { Link } from 'react-router-dom';


const Blog = () => {
    const dispatch = useDispatch();
    const blog = useBlog();

    return(
        <div>
            <Navbar sticky="top" bsPrefix='navbar' variant="dark" className={style.navbar}>
                <Navbar.Brand as={Link} to="/" className={style.navLink} onClick={() => dispatch(setActiveNav('Home'))} >Adam Capdeville</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className={style.navbarToggle} />
            </Navbar>

            <div className={style.blogScreenTitle} >
                {blog.title}
            </div>

            <div className={style.heroImageContainer}>
                <img className={style.heroImage} src={blog.heroImage} />
            </div>



            <div className={style.blogContainer}>

                <Card className={style.abstractContainer}>
                    <div className={style.abstract}>
                        <h4><strong>Abstract</strong></h4>
                        <p className={style.abstractText}>{blog.abstract}</p>
                    </div>
                </Card>

                {blog.entry.map( (e, index) => (
                    <Card className={style.entry} key={index}>
                        <h4>
                            <strong>
                                {e.title}
                            </strong>
                        </h4>
                        <h5>
                            <strong>
                                {e.subtitle}
                            </strong>
                        </h5>
                        <Card.Subtitle>{e.date}</Card.Subtitle>

                        {e.description.map( (descr, i) => (
                            <>
                            
                            <Card.Body className={style.entryText} key={i}> 
                                {descr} 
                            </Card.Body>

                            {e.img[i] && (
                                <Card.Body className={style.entryImageContainer} > 
                                    <img className={style.entryImage} src={e.img[i]}/> 
                                </Card.Body>
                                )
                            }
                            {e.simg[i] && (
                                <Card.Body className={style.entrySmallImageContainer} > 
                                    <img className={style.entrySmallImage} src={e.simg[i]}/> 
                                </Card.Body>
                                )
                            }
                            {e.vid[i] && 
                                (<Card.Body>
                                    <div className={style.entryVideoContainer}>
                                        <video className={style.entryVideo} controls>
                                            <source src={e.vid[i]} type="video/mp4"/>
                                        </video>                                
                                    </div> 
                                </Card.Body>)
                            }
                            </>
                        ))}
                    </Card>
                ))}
                <br/>
            </div>

        </div>
    )
}

export default Blog;
