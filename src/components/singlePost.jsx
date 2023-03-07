import Banner from "./banner";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../styles/singlepost.css"
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
            <div className="spban">
                <Banner data={title} />

            </div>
            <div className="sptxt d-flex">
                <div className="spimg">
                    <img src={post.image} alt="" height="500px" width="600px" />
                </div>
                <div className="sptxt1 ms-3 mt-3">
                    <div className="sptitle">
                        <h2><b>{post.title}</b></h2>
                    </div>
                    <div className="spsummary mt-3">
                        <p><b>Summary:</b>{post.summary}</p>
                    </div>
                    <div className="sploc">
                        <iframe src={post.location} frameborder="0"></iframe>
                    </div>
                    <div className="splink mt-3">
                        <Link to="/home/foods" id="spbck">Back to Posts</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePost;