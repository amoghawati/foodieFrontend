import { useEffect, useState } from "react";
import Banner from "./banner";
import axios from "axios";
import "../styles/about.css"
const About = () => {
    let [add,setAdd]=useState('')
    useEffect(()=>
    {
        let fetchData=async()=>{
            let response =await axios.get(`http://localhost:5000/posts`)
            let data=await response.data
         console.log(setAdd(data))   
        }
        fetchData()
    })

        let [add1,setAdd1]=useState('')
        useEffect(()=>
        {
            let fetchData=async()=>{
                let response =await axios.get(`http://localhost:5000/users`)
                let data=await response.data
             console.log(setAdd1(data))   
            }
            fetchData()
        })
    let title="About page"
    return ( 
        <div className="about">
      <div className="abtbantitle">
        <Banner data={title} />
      </div>
      <div className="abtblock d-flex">
        <div className="abtimg">
<img src="/images/pizza.jpg" alt="" height="700px" width="600px"/>
        </div>
        <div className="abttoptxt ms-5 " >
            <div className="hed mt-4">
              <h1><b>  About Stories</b></h1>
            </div>
            <div className="para fs-5" >
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            </div>
            <div className="abttxt d-flex flex-wrap mt-0 ">
                <div className="txt1 d-block" >
                   <div className="txt1pa">
                   <h3>10</h3>
                    <p>Years of Experienced</p>
                   </div>
                </div>
                <div className="txt1 ms-5">
                <div className="txt1pa">
                <h3>{add.length}</h3>
                    <p>Foods</p>
                </div>
                </div>
                <div className="txt1bot d-flex">
                <div className="txt1" >
             <div className="txt1pa">
             <h3>300</h3>
                    <p>Lifestyle</p>
             </div>
                    </div>
                    <div className="txt1 ms-5">
                    <div className="txt1pa">
                    <h3>{add1.length}</h3>
                    <p>Happy Customers</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
     );
}
 
export default About;