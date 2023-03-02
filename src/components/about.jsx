import { useState } from "react";
import Banner from "./banner";

const About = () => {
    const title = "About Us"
    const [list,setList] = useState([
        {
            value:10,
            about:"Years of Experience"
        },
        {
            value:200,
            about:"Foods"
        },
        {
            value:300,
            about:"Lifestyle"
        },
        {
            value:40,
            about:"Happy Customers"
        }
    ])
    return ( 
        <div className="about">
            <Banner data={title} />
            <div className="aboutFoodie my-5 d-flex justify-content-center">
                <div className="aboutImage">
                    <img className="rounded-2" width="450" height="600" src="/images/healthy.jpg" alt="" />
                </div>
                <div className="aboutInfo w-50 p-5">
                    <h2 className="fw-bolder fs-1">About Foodie</h2>
                    <div className="line my-3"></div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tenetur, voluptate quod quis laboriosam vitae?</p>
                    <div className="lists d-flex flex-wrap justify-content-between">
                        {list.map(item => (
                            <div className="list bg-light p-5 border text-center" key={item.value} style={{width:"50%"}}>
                                <h1 className="fw-bolder">{item.value}</h1>
                                <p className="text-secondary">{item.about}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default About;