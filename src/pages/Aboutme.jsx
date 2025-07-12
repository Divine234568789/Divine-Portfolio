const Aboutme = () => {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-32 xl:px-40 max-w-7xl mx-auto">
      {/* About Me Section */}
      <section className="mb-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Text Section */}
          <div className="flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold">
                <span className="text-pink-500">#</span>About-Me
              </h2>
              <div className="bg-pink-500 h-1 w-24" />
            </div>
            <div className="text-base sm:text-lg leading-8 space-y-4">
              <p>Hello, I’m Divine!</p>
              <p>
                I’m a learning developer based in Lagos, Nigeria. I can develop
                responsive websites from scratch and raise them into modern
                user-friendly web experiences.
              </p>
              <p>
                Transforming my creativity and knowledge into a website has been
                my passion for over a year. I have been helping various clients
                to establish their presence online. I always strive to learn
                about the newest technologies and frameworks.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-sm flex-1">
            <img
              src="/img/Dots.png"
              alt=""
              className="absolute top-10 left-0 z-0"
            />
            <img
              src="/img/Dots2.png"
              alt=""
              className="absolute bottom-5 w-30 -right-2 z-40"
            />
            <img
              src="/img/me2.png"
              alt="Divine"
              className="relative z-10 w-full"
            />
            <div className="bg-pink-500 w-full h-1" />
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-3xl font-bold">
            <span className="text-pink-500">#</span>my-fun-facts
          </h2>
          <div className="bg-pink-500 h-1 w-24" />
        </div>

        <div className="flex flex-wrap gap-4 text-base sm:text-lg font-medium">
          <div className="border-2 px-4 py-2 rounded">
            I'm always working on new projects
          </div>
          <div className="border-2 px-4 py-2 rounded">
            I'm a Junior Frontend Developer
          </div>

          <div className="border-2 px-4 py-2 rounded">
            I am based in Lagos, Nigeria
          </div>
          <div className="border-2 px-4 py-2 rounded">
            I'm a student of Caleb University
          </div>
          <div className="border-2 px-4 py-2 rounded">
            I have a passion to become the best
          </div>
          <div className="border-2 px-4 py-2 rounded">
            I am a citizen of both Togo and Nigeria
          </div>
        </div>

        {/* Background images */}
        <div className="relative mt-10">
          <img
            src="/img/Dots.png"
            alt=""
            className="absolute left-0 bottom-0 w-16 opacity-60"
          />
          <img
            src="/img/logo2.png"
            alt=""
            className="absolute right-0 bottom-0 w-16 opacity-60"
          />
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
