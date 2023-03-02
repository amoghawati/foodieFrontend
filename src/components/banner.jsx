import { Link } from "react-router-dom";

const Banner = ({ data }) => {
    return (
        <div className="banner row align-items-end">
            <div className="info text-center pb-5">
                <h1 className="text-light fw-bolder" style={{ fontFamily: "Playfair Display", fontSize: "64px" }}>{data}</h1>
                <Link to="/home" className="text-decoration-none text-light fs-5">Home &gt;</Link>
            </div>
        </div>
    );
}

export default Banner;