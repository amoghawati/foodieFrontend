import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Banner from "./banner";
import axios from "axios";
import "../styles/food.css"
const Food = () => {
    let title = "All Posts"
    let [posts, setPosts] = useState([])
    let[singlepost,setsinglePost]=useState([])
    useEffect(() => {
        let fetchData = async () => {
            const res = await axios.get("http://localhost:5000/posts")
            const data = await res.data
            setPosts(data)
        }
        fetchData()
    }, [posts])
    return (
        <div className="posts">
            <div className="potban align-items-center justify-content-center">
                <Banner data={title} />
            </div>
            <div className="posts_list mt-5">
                {posts.map((x) => (
                    <div className="fdblk ">
                        <div className="pot mt-5">
                            <div className="image card-header">
                                <Link to={`/home/food/${x._id}`}  >  <img src={x.image} alt="" height="300px" width="400px" /></Link>


                            </div>
                            <div className="title mt-3">
                                <h2><b>Title:</b>{x.title}</h2>

                            </div>
                            <div className="author mt-3">
                                <h2><b>Author:</b>{x.author}</h2>

                            </div>
                            <div className="read mt-3">
                                <Link to={`/home/food/${x._id}`} onClick={singlepost} id="redbtn">Read Post➔</Link>
                            </div>



                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Food;