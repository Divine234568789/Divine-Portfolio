const Aboutme = () => {
  return (
    <div>
      <section className="ml-30">
        <div className="flex gap-40 items-center">
          <div className="flex-col">
            <div className="flex ">
              <div className="text-3xl font-bold">
                <span className="text-pink-500">#</span>About-Me
              </div>
              <div className="bg-pink-500 w-65 h-1 flex top-5 left-5 relative"></div>
            </div>
            <div className="text-3000px ml-7">
              <span className="leading-20">Hello, i’m Divine! </span>
              <br />
              I’m a learning developer based in Lagos,
              <br />
              Nigeria. I can develop responsive websites from <br /> scratch and
              raise them into modern user-friendly web <br />
              experiences. <br />
              <div className="mt-10">
                Transforming my creativity and knowledge into a <br />
                website has been my passion for over a year. I have <br />
                been helping various clients to establish their <br />
                presence online. I always strive to learn about the <br />
                newest technologies and frameworks.
              </div>
            </div>
          </div>
          <div className="ml-40">
            <img src="/img/Dots.png" alt="" className="z-10 relative top-35" />
            <img
              src="/img/Dots2.png"
              alt=""
              className="relative top-80 left-50 z-10"
            />
            <img src="/img/me2.png" alt="" className="bottom-15 relative" />
            <div className="bg-pink-500 w-90 h-0.5 bottom-15 relative"></div>
          </div>
        </div>
      </section>
      <section className="ml-30 ">
        <div className="flex">
          <div className="text-3xl font-bold">
            <span className="text-pink-500">#</span>my-fun-facts
          </div>
          <div className="bg-pink-500 w-65 h-1 flex top-5 left-5 relative"></div>
        </div>
        <div className="mt-15 ml-7">
          <div className="flex">
            <div className="justify-center text-2xl flex border-2 items-center w-45 h-10">
              I love the rain
            </div>
            <div className="justify-center text-2xl flex border-2 items-center w-80 h-10 relative ml-5">
              I love Pizza and Burgers
            </div>
          </div>
          <div className="flex mt-5">
            <div className="justify-center text-2xl flex border-2 items-center w-120 h-10 relative">
              My favourite movie is Avengers Endgame
            </div>
            <div className="justify-center text-2xl flex border-2 items-center w-92 h-10 relative ml-5">
              I am based in Lagos,Nigeria
            </div>
          </div>
          <div className="flex mt-5">
            <div className="justify-center text-2xl flex border-2 items-center w-66 h-10 relative">
              I have two siblings
            </div>
            <div className="justify-center text-2xl flex border-2 items-center w-110 h-10 relative ml-5">
              I have a passion to become the best
            </div>
          </div>
          <div className="justify-center text-2xl flex border-2 items-center w-120 h-10 relative mt-5">
            I am a citizen of both Togo and Nigeria
          </div>
        </div>
        <img src="/img/Dots.png" alt="" className="left-235 bottom-60 relative " />
        <img src="/img/logo2.png" alt="" className="left-266 bottom-60 relative " />
      </section>
    </div>
  );
};

export default Aboutme;
