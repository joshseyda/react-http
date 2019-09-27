import React, { Component } from 'react';
import { Route } from 'react-router';
// import FullPost from '../../containers/Blog/FullPost/FullPost';
// import NewPost from '../../containers/Blog/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';

// import axios from '../../axios';




class Blog extends Component {

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/post">Post</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" render={() => <h1> Home </h1>} />
            </div>
        );
    }
}

export default Blog;