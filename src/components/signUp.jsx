import axios from "axios";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    let navigate=useNavigate()
    let rname=useRef()
    let remail=useRef()
    let rphonenumber=useRef()
    let rpassword=useRef()
    let rconfirm_password=useRef()
    // let [name,setname]=useState()
    // let [email,setEmail]=useState()
    // let [phonenumber,setPhonenumber]=useState()
    // let [password,setPwd]=useState()
    // let [confirm_password,setCpwd]=useState()
   
    let handleSubmit=(e)=>{
        e.preventDefault()
        let name=rname.current.value
        let email=remail.current.value
        let phonenumber=rphonenumber.current.value
        let password=rpassword.current.value
        let confirm_password=rconfirm_password.current.value
        let data={name,email,phonenumber,password,confirm_password}
        if(name && phonenumber && email && (password==confirm_password)){
            // console.log(data);
            axios.post("http://localhost:5000/signup",data)
            .then((res)=>{
                console.log(data);
                alert(res.data.message)
                navigate('/')
                console.log(data);
            })
        }else{
            alert('invalid credentials')
        }
    }
    return ( 
        <div className="signup mx-auto fw-bold fs-2">
            <h1>Signup Page</h1>
            <div className="form w-25 ">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                    <input type="text" placeholder="Enter Name"  ref={rname} className="form-control" name="name" />
                    </div>
                    <div className="mobile_no">
                    <input type="text" placeholder="Enter Mobile Number" ref={rphonenumber} className="form-control" name="phonenumber" />
                    </div>
                <div className="email">
                        <input type="text" placeholder="Enter Email" ref={remail} className="form-control" name="email" />
                    </div>
                    <div className="password">
                        <input type="password" className="form-control" ref={rpassword} name="password" placeholder="Enter Password" />
                    </div>
                    <div className="confirm_password">
                        <input type="password" className="form-control"ref={rconfirm_password} name="confirm_password" placeholder="Enter Password" />
                    </div>
                    <div className="signup_btn mt-3 mx-auto">
                        <button type="submit" className="btn btn-success">SIgnUp</button>
                    </div>
                    <div className="login_button mt-1">
                        <p>Already a user ?</p>
                        <Link to='/' className="btn btn-outline-success mt-0 mx-auto" >Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;