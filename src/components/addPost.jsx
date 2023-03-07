import axios from "axios";
import { useState } from "react";
import "../styles/addposts.css";
import Banner from "./banner";
// import pst1 from '../images1/pst1'
const AddPosts = () => {
    let title1 = "Add Your Post";
    let [author, setAuthor] = useState("")
    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [image, setImage] = useState("")
    let [location, setLocation] = useState("")
    let addPost = (e) => {
        e.preventDefault()
        let data = { author, title, summary, image, location }
        if (author && title && summary && image && location) {
            axios.post('http://localhost:5000/add-Posts', data)
                .then(res => {
                    alert(res.data.message)
                }).catch(err => {
                    alert(err.data.message)
                })
        } else {
            alert('Please fill all the fields')
        }
    }
    return (
        <div className="addposts">
            <div className="banner">
                <Banner data={title1} />
            </div>
            <div className="blockaddpt d-flex mt-5 ">
                <div className="img">
                    <img src="/images/food.jpg" alt="" height="500px" width="500px" />
                </div>
                <div className="txt ms-5">
                    <h1><u><b>ADD POST</b></u></h1>
                    <form action="" className="form" onSubmit={addPost}>
                        <div className="author mt-2">
                            <label htmlFor="">Author</label>
                            <input type="text" className="form-control " placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} name="author" />
                        </div>
                        <div className="title mt-2">
                            <label htmlFor="">Title</label>
                            <input type="text" className="form-control" placeholder="title of the post" value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
                        </div>
                        <div className="summary mt-2">
                            <label htmlFor="">Summary</label>
                            <textarea type="text" className="form-control" placeholder="Summary of the post" value={summary} onChange={(e) => setSummary(e.target.value)} name="summary" />
                        </div>
                        <div className="image mt-2">
                            <label htmlFor="">image</label>
                            <input type="text" className="form-control" placeholder="image of the post" value={image} onChange={(e) => setImage(e.target.value)} name="image" />
                        </div>
                        <div className="location mt-2">
                            <label htmlFor="">Location</label>
                            <input type="text" className="form-control" placeholder="loaction of the post" value={location} onChange={(e) => setLocation(e.target.value)} name="location" />
                        </div>
                        <button className="btn mt-3" type="submit">Submit Post</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddPosts;
