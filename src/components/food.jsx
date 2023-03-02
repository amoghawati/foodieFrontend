import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./banner";
import axios from "axios";
const Food = () => {
    let title = "All Posts"
    let [posts, setPosts] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:5000/posts")
            const data = await res.data
            setPosts(data)
        }
        fetchData()
    },[posts])
    return (
        <div className="food">
            <Banner data={title} />
            <div className="posts_list d-flex flex wrap my-5">
                {posts.map((post) => {
                    return (
                        <div className="post mx-3" key={post._id}>
                            <Link to={`/home/food/${post._id}`}><img src={post.image} className="rounded-2 homePostImage" width="300" height="350" alt="" /></Link>
                            <div className="info mt-3">
                                <h2 style={{ fontFamily: "inherit" }}>{post.title}</h2>
                                <p className="text-secondary">- Written by {post.author}</p>
                                <Link to={`/home/food/${post._id}`} className="btn btn-dark rounded-1 homeBtn">Read more &gt;</Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    );
}

export default Food;