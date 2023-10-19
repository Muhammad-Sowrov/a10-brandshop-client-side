const Banner = () => {
  return (
    <div className="container mx-auto">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4trb8CB/229.jpg)",
        }}
      >
        <div className="hero-overlay bg-white opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"><p className="text-black text-5xl">
                Blush<span className="text-2xl text-purple-600">ly</span>
              </p></h1>
            <p className="mb-5 text-sm md:text-xl text-purple-600">
            Discover Your Beauty Potential with Our Exquisite Cosmetic and Beauty Products! 🌟 Shop Now for Radiant Skin and Unforgettable Glamour.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
            <hr className="text-black" />
            <hr className="text-black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
