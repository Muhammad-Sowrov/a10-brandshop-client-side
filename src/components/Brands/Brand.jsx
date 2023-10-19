const Brand = ({ brand }) => {
  const { brand_name, logo } = brand;
  return (
    <div>
      <div className="car border flex-col mx-5 py-5 my-2 md:my-5 bg-purple-100 rounded-md">
        <figure className="px-10 pt-10 flex-col-1 ">
          <img
            src={logo}
            alt="brand-img"
            className="w-20 h-10 mx-auto text-center items-center rounded-xl"
          />
        </figure>
        <p className="mt-5 text-center text-black text-lg font-bold">Brand Name: {brand_name}</p>
      </div>
    </div>
  );
};

export default Brand;
