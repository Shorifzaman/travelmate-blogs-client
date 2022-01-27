import { Switch } from '@headlessui/react';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About/About';
// import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import SignInScreen from './components/Login/SignInScreen';
import SignUpScreen from './components/Login/SignUpScreen';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './contexts/AuthProvider';
import PostsList from '../src/components/Blogs/CommentList';
import CreatePost from '../src/components/Blogs/CreatePosts';
import Post from '../src/components/Blogs/Post';
import EditPost from '../src/components/Blogs/EditPost';

const App = () => {
  return (
    <>
     
      <AuthProvider>
       <Router>    
          <Navbar />
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/home"><Home /></Route>
            <Route exact path="/about"><About /></Route>

            <Route path="/posts" exact component={PostsList} />
            <Route path="/posts/new/" exact component={CreatePost} />
            <Route path="/posts/:id" exact component={Post} />
            <Route path="/posts/:id/edit" exact component={EditPost} />

            <Route exact path="/signup"><SignUpScreen /></Route>
            <Route exact path="/signin"><SignInScreen /></Route>
            
            
            {/* <Route  path="*"><ErrorScreen /></Route> */}
          </Switch>
          </Router>
          {/* <Footer></Footer> */}
          
      </AuthProvider>

    </>
  );
};

export default App;