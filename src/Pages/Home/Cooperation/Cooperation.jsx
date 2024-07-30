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
import MoreAbout from "../MoreAbout/MoreAbout";


const Cooperation = () => {
    return (
        <div className="mx-5 mt-5 md:mt-0 rounded-md lg:relative z-10">
            <Parallax bgImage={parallaxBg} strength={700} className='home-parallax relative z-10'>
                <div className="bg-slate-950 bg-opacity-50 h-[300px] lg:h-[500px] ">
                    <div className="h-full grid grid-cols-1 xl:grid-cols-2 rounded-md lg:mx-auto">
                        <div className="flex flex-col justify-center items-center lg:w-4/6 mx-auto">
                            <PrimaryTitle>OTHER AMINITES AND SERVICES</PrimaryTitle>
                            <h1 className="text-2xl lg:text-4xl font-serif text-center text-white leading-relaxed mt-5">ENJOY COMPLETE & BEST QUALITY COOPERATION</h1>
                        </div>
                        <div className="flex justify-center ">
                            <Marquee
                                pauseOnHover={true} className="lg:h-24 my-auto overflow-hidden">
                                <img src={img1} alt="img" className="w-40 lg:w-60" />
                                <img src={img2} alt="img" className="w-40 lg:w-60" />
                                <img src={img3} alt="img" className="w-40 lg:w-60" />
                                <img src={img5} alt="img" className="w-40 lg:w-60" />
                                <img src={img4} alt="img" className="w-40 lg:w-60" />
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Parallax>

            {/* More About Us */}
            <div className="mx-auto xl:w-10/12 xl:my-5 2xl:w-10/12 left-[8.3%] 2xl:absolute 2xl:top-3/4 bg-white rounded-xl overflow-hidden z-10">
                <MoreAbout />
            </div>

            <div className='hidden lg:absolute lg:flex items-center gap-5 lg:top-[101.5%] 2xl:-top-[75%] left-0  z-50'>
                <div className='w-10 h-[1px] bg-slate-500'></div>
                <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
            </div>

            <div className='hidden lg:absolute lg:flex items-center gap-5 lg:top-[101.5%] 2xl:-top-[75%] right-0 '>
                <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
                    <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
                </div>
                <div className='w-10 h-[1px] bg-slate-500'></div>
            </div>

        </div>
    );
};

export default Cooperation;