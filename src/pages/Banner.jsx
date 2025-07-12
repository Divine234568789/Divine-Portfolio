import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Contact");
  };

  return (
    <div className="px-4 sm:px-10 md:px-20 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 font-semibold">
            Divine is a <span className="text-pink-500">web designer</span> and
            <br />
            <span className="text-pink-500">front-end developer</span>
          </h1>

          <h2 className="text-sm sm:text-base text-gray-400 pb-6 leading-relaxed">
            He crafts responsive websites where technologies <br /> meet
            creativity
          </h2>

          <button
            onClick={handleClick}
            className="border-2 border-pink-500 w-36 px-4 py-2 text-sm hover:cursor-pointer font-medium hover:bg-pink-600 transition-all duration-300"
          >
            Contact Me →
          </button>
        </div>

        <div className="relative flex-1 max-w-sm lg:max-w-md">
          <img
            src="/img/me.png"
            alt="Divine"
            className="w-full z-10 relative"
          />
          <img
            src="/img/logo2.png"
            alt=""
            className="absolute bottom-6 left-1/3 w-30 opacity-70 z-10"
          />
          <img
            src="/img/Dots.png"
            alt=""
            className="absolute bottom-20 left-10 w-30 opacity-50 -z-10"
          />
        </div>
      </div>

      <div className="mt-12 space-y-4 text-center px-2">
        <div className="text-lg sm:text-2xl md:text-3xl border-2 py-4 px-6 max-w-4xl mx-auto font-medium">
          The sooner you start to code, the longer the program will take.
        </div>
        <div className="text-base sm:text-xl border-2 py-2 px-4 max-w-md mx-auto">
          - Roy Carlson 😎
        </div>
      </div>
    </div>
  );
};

export default Banner;
