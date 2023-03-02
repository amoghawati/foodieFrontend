import Banner from "./banner";
import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddPost = () => {
    const data = "Add Your Post"
    let [modal, setModal] = useState(0)
    let [message, setMessage] = useState("")
    let [title, setTitle] = useState("")
    let [summary, setSummary] = useState("")
    let [image, setImage] = useState("")
    let [author, setAuthor] = useState("")
    let [location, setLocation] = useState("")

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let addPost = (e) => {
        e.preventDefault()
        let data = {title,summary,image,location,author}
        if (title === "" || summary === "" || location === "") {
            alert("Please fill all the fields")
        }
        else {
            axios.post("http://localhost:5000/add-post", data)
                .then(res => {
                    setModal(1)
                    setMessage(res.data.message)
                    setShow(true)
                })
                .catch(err => {
                    setMessage(err.data.message)
                })
        }
        console.log();
    }
    return (
        <div className="addPost">
            <Banner data={data} />
            <div className="postForm my-5 d-flex justify-content-center align-items-center">
                <div className="image col-5">
                    <img src="/images/pancakes.jpg" loading='lazy' className="rounded-2" width="500" height="670" alt="" />
                </div>
                <div className="form col-5">
                    <h1 className="fw-bolder fs-1">ADD POST</h1>
                    <div className="line my-3"></div>
                    <form action="" onSubmit={addPost}>
                        <div className="author">
                            <label htmlFor="author">Author</label>
                            <input type="text" className="form-control my-2 rounded-0" id="author" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
                        </div>
                        <div className="title">
                            <label htmlFor="">Title</label>
                            <input name="title" className="form-control my-2 rounded-0" type="text" placeholder="title of the post" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className="summary">
                            <label htmlFor="">Summary</label>
                            <textarea rows="5" name="summary" className="form-control my-2 rounded-0" type="text" placeholder="summary of the post" value={summary} onChange={(e) => setSummary(e.target.value)} />
                        </div>
                        <div className="image">
                            <label htmlFor="">Image</label>
                            <input name="image" className="form-control my-2 rounded-0" type="text" placeholder="image of the post" value={image} onChange={(e) => setImage(e.target.value)} />
                        </div>
                        <div className="location">
                            <label htmlFor="">Location</label>
                            <input name="location" className="form-control my-2 rounded-0" type="text" placeholder="location of the post" value={location} onChange={(e) => setLocation(e.target.value)} />
                        </div>
                        <button type='submit' className="btn orange rounded-2 btn-lg my-4">Submit Post</button>
                    </form>
                </div>
            </div>
            {modal === 1 ? <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your post regarding {title} has been added successfully</Modal.Body>
                <Modal.Footer>
                    <Button className='orange border-0' onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal> : <Modal show={show} onHide={handleClose}>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button className='orange border-0' onClick={handleClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>}
        </div>
    );
}

export default AddPost;