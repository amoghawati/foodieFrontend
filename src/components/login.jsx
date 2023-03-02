import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import {  useRef } from "react";


const Login = () => {
    let navigate=useNavigate()
    let remail = useRef("")
    let rpwd = useRef("")
    
    let handleSubmit=(e)=>{
        e.preventDefault()
        let email=remail.current.value
        let password=rpwd.current.value
        let data={email,password}
        axios.post("http://localhost:5000/login",data)
        .then((res)=>{
            if(res.data.message=='login successfull'){
                navigate("/home")
            }else{
                alert(res.data.message)
            }
        })
    }
return (
    <div className="login ">
        <h1 className="text-light mx-auto">Login Page</h1>
        <div className="lform   ">
            <form action="" className="w-25" onSubmit={handleSubmit}>
                <div className="email">
                    <input type="text" ref={remail} placeholder="Enter Email" className="form-control"  />
                </div>
                <div className="password">
                    <input type="password" ref={rpwd} className="form-control"  placeholder="Enter Password" />
                </div>
                <div className="login_btn">
                    <button className="btn btn-success mt-1">Login</button>
                </div>
                <div className="signup_btn mt-3">
                    <p>Are you a new user ?</p>
                    <Link to="/signup" className="btn btn-outline-success">SIgnUp</Link>
                </div>
            </form>
        </div>
    </div>
);
}

export default Login;