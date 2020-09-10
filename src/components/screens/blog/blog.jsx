import React, { useState, useRef, useEffect } from 'react'
import style from "./blog.module.scss";

import { useDispatch } from 'react-redux'
import { setActiveNav } from '../../../ducks/nav';
import { useBlog } from '../../../ducks/blog';

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
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Subtitle>{e.date}</Card.Subtitle>
                        {e.description.map( (descr, i) => (
                            <>
                            <Card.Body key={i}> {descr} </Card.Body>
                            {e.img[i] && 
                                (<Card.Body className={style.entryImageContainer} > 
                                    <img className={style.entryImage} src={e.img[i]}/> 
                                </Card.Body>
                                )}
                            </>
                        ))}
                    </Card>
                ))}


            </div>

        </div>
    )
}

export default Blog;
