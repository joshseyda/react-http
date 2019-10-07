import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import FullPost from '../../containers/Blog/FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';

// import axios from '../../axios';




class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact activeClassName="active">Posts</NavLink></li>
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
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts}/>
                    <Route render={() => <h1>404: Not found</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path="/" component={Posts}/> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;