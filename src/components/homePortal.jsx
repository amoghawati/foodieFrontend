import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from 'react-router-dom'
import About from './about';
import AddPost from './addPost';
import Food from './food';
import Home from './home';
import Navbar from './navbar';
import SinglePost from './singlePost';

const HomePortal = () => {
    return ( 
        <div className="homeportal">
           <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/food" element={<Food />} />
          <Route path="/food/:id" element={<SinglePost />} />
          <Route path='/add-posts' element={<AddPost />} />
        </Routes>
        
        </div>
     );
}
 
export default HomePortal;