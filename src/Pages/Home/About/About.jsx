import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="home_about relative grid grid-cols-1 lg:grid-cols-2 lg:p-20 gap-10 lg:gap-0 lg:mx-20 border border-dashed rounded-md my-20 ">
      {/* Content */}
      <div className={`p-5 flex flex-col gap-3 items-start`}>
        <p className="text-[#c4a676] text-lg font-semibold">
          <hr className="w-16 border border-[#c4a676] mb-2" />
          Enjoy your time in our Hotel
        </p>
        <h1 className="text-5xl font-semibold my-2 font-serif">
          About Our Hotel
        </h1>
        <div className="text-gray-500 text-sm leading-7 mb-3">
          <p className="first-letter:text-6xl first-letter:text-[#c4a676]">
            Qed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur.Ut enim ad minima Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur.
          </p>
          <br />
          <p>
            Fames massa tortor sit nisl sit. Duis nulla tempus quisque et diam
            condimentum nisl. Rhoncus quisque elementum nulla lorem at turpis
            vitae quisque. Vulputate duis vel et odio hendrerit magna. Nec
            lacus dui egestas sit. Vulputate tincidunt viverra viverra etiam
            porta facilisis. Fames massa tortor sit nisl sit. Duis nulla
            tempus quisque et diam condimentum nisl. Rhoncus quisque elementum
            nulla lorem at turpis vitae quisque. Vulputate duis vel et odio
            hendrerit magna. Nec lacus dui egestas sit. Vulputate tincidunt
            viverra viverra etiam porta facilisis.
          </p>
        </div>
        <button className="custom-btn bg-slate-900 text-[#c4a676] hover:bg-[#c4a676] hover:text-black">
          <Link to={"/about"}>Read More About Us</Link>
        </button>
      </div>

      {/* Image */}

      <div className="flex flex-col items-center justify-center relative row-start-1 lg:row-span-2">
        <img
          src="https://i.ibb.co/PjfV2PQ/1.jpg"
          alt="img"
          className="w-3/4 rounded-md"
        />
        <div className="border w-2/5 border-dashed border-[#c4a676] p-4 rounded-md absolute right-0 top-5">
          <img
            src="https://i.ibb.co/Jv3Pjtd/2.jpg"
            alt="img"
            className=" rounded-md"
          />
        </div>

        <div className="border w-2/6 border-dashed border-[#c4a676] p-4 rounded-md absolute bottom-5 left-0">
          <img
            src="https://i.ibb.co/7RBppYN/3.jpg"
            alt="img"
            className=" rounded-md"
          />
        </div>
      </div>

      <div className='hidden lg:absolute lg:flex items-center gap-5 top-[52%]'>
        <div className='w-10 h-[1px] bg-slate-500'></div>
        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
          <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
        </div>
      </div>

      <div className='hidden lg:absolute lg:flex items-center gap-5 top-[47%] right-0'>
        <div className='p-2 rounded-full border border-dashed border-[#c4a676]'>
          <div className='w-3 h-3 rotate-45 bg-[#c4a676]'></div>
        </div>
        <div className='w-14 h-[1px] bg-slate-500'></div>
      </div>
    </div>
  );
};

export default About;