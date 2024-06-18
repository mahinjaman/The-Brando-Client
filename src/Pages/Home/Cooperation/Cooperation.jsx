import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import parallaxBg from '../../../assets/cooparetion/parallaxBg.jpg'
import PrimaryTitle from "../../../Components/Shared/PrimaryTitle";
import Marquee from "react-fast-marquee";


// Slider Image

import img1 from '../../../assets/cooparetion/slider/1.png'
import img2 from '../../../assets/cooparetion/slider/2.png'
import img3 from '../../../assets/cooparetion/slider/3.png'
import img4 from '../../../assets/cooparetion/slider/4.png'
import img5 from '../../../assets/cooparetion/slider/5.png'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const Cooperation = () => {
    return (
        <div className="mx-5 rounded-md">
            <Parallax bgImage={parallaxBg} strength={500} className="bg-cover bg-center rounded-md">
                <div style={{ height: 500 }} className="bg-slate-950 bg-opacity-50">
                    <div className="absolute h-full grid grid-cols-1 lg:grid-cols-2 w-11/12 mx-auto">
                        <div className="flex flex-col justify-center items-center">
                            <PrimaryTitle>OTHER AMINITES AND SERVICES</PrimaryTitle>
                            <h1 className="text-4xl font-serif text-center text-white leading-relaxed mt-5">ENJOY COMPLETE & BEST QUALITY COOPERATION</h1>
                        </div>
                        <div className="flex justify-center">
                            <Marquee
                            pauseOnHover={true} className="lg:h-20 my-auto">
                                <img src={img1} alt="" className="w-60"/>
                                <img src={img2} alt="" className="w-60"/>
                                <img src={img3} alt="" className="w-60"/>
                                <img src={img5} alt="" className="w-60"/>
                                <img src={img4} alt="" className="w-60"/>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cooperation;