import hand from '../assets/images/hand.png';
import right_arrow from "../assets/images/right-arrow.png";
import hero_img from "../assets/images/hero_img1.webp";
import { Link } from 'react-router-dom'
import './Heropage.css';

export const Heropage = () => {
    return (
        <div className="hero">

            <div className="hero-left">
                <h2>New Arrivals</h2>

                <div className="hero-collection">
                    <div className="hero-hand-icon">
                        <p>new</p>
                        <img src={hand} alt="hand icon" />
                    </div>
                    <p>Collections</p>
                    <p>For everyone</p>
                </div>

                <Link to="/products"> <div className="hero-latest-btn" style={{color:'white'}}>
                    <div>Latest Collection</div>
                    <img src={right_arrow} alt="arrow" />
                </div></Link>
            </div>
            <div className="hero-right">
                <img src={hero_img} alt="Hero Image" />
            </div>
        </div>
    );
};


export default Heropage