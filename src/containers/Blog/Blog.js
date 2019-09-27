import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
// import FullPost from '../../containers/Blog/FullPost/FullPost';
import NewPost from './NewPost/NewPost';
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
                            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post', 
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1> Home </h1>} />
                <Route path="/"  render={() => <h1> Place </h1>} /> */}
                <Route path="/" exact component={Posts}/>
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;