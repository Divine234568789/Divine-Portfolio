import { useNavigate } from "react-router";
const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <div>
      <div className="flex">
        <div className=" ml-35 mt-40">
          <h1 className="text-3xl mb-10">
            Divine is a <span className="text-pink-500">web designer</span> and
            <br />
            <span className="text-pink-500"> front-end developer</span>
          </h1>
          <h2 className="text-8px text-gray-400 pb-5">
            He crafts responsive websites where technologies <br /> meet
            creativity
          </h2>

          <button
            onClick={handleClick}
            className="border-2 border-pink-500 w-36 cursor-pointer hover:bg-pink-600 active:scale-120 transition-all "
          >
            Contact Me &#8594;
          </button>
        </div>
        <div className="ml-30">
          <img src="public/me.png" alt="" className="ml-30 mt-14 " />
          <img
            src="public/logo2.png"
            alt=""
            className="ml-43 bottom-75 relative -z-10"
          />
          <img src="/Dots.png" alt="" className="left-130 relative bottom-72" />
        </div>
      </div>
      <div className="bottom-49  pl-70 relative">
        <img src="/apostrophe.png" alt="" />
      </div>
      <div className="pl-260 bottom-34 relative">
        <img src="/apostrophe.png" alt="" />
      </div>
      <div className="flex-col ">
        <div className="text-3xl flex justify-center ml-60 -mt-60 border-2 items-center h-22 w-4xl">
          The sooner you start to code, the longer the program will take.
        </div>
        <div className="text-3xl flex w-62 ml-222 justify-center items-center border-2 h-14">
          - Roy Carlson😎
        </div>
      </div>
    </div>
  );
};

export default Banner;
