import Banner from "./banner";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
    const title = "Single Post";
    const [post, setPosts] = useState({})
    let params = useParams()

    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get(`http://localhost:5000/posts/${params.id}`)
            const data = await res.data
            setPosts(data)
            console.log(post);
        }
        fetchData()
    }, [post])
    return (
        <div className="singlepost">
            <Banner data={title} />
            <div className="blogInfo text-center my-5 d-flex justify-content-center">
                <div className="image col-5" >
                    <img src={post.image} className="rounded-2" alt="" height="900" width="700" />
                </div>
                <div className="info col-5 text-start">
                    <h1 className="my-3">{post.title}</h1>
                    <div className="line mb-3"></div>
                    <p>{post.summary}</p>
                    <div className="location">
                        <h2> <img width="30" src="/images/location.svg" alt="" /> Location</h2>
                        <div className="line mb-3"></div>
                        <iframe src={post.location}
                            className="my-3"
                            width="600" height="450"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="linkBtn text-center">
                <Link to='/home/food' className="btn btn-dark btn-lg rounded-1 my-4 homeBtn">&lt; Go back to Posts</Link>
            </div>
        </div>
    );
}

export default SinglePost;