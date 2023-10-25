import { useLoaderData } from "react-router-dom";

const Details = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const { _id, image, name, brand_name, type, price, rating, description } =
    productDetails;
  return (
    <div className="hero min-h-screen bg-slate-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <div className="flex gap-5">
            <p className="pt-2 font-bold">Brand: {brand_name}</p>
            <p className="pt-2 font-bold">Brand: {type}</p>
            <p className="pt-2 font-bold ">Rating: {rating}/5</p>
          </div>
          <p className="pt-5 text-2xl font-bold">Price: {price}$</p>
          <p className="pt-5 text-2xl ">{description}</p>

          <div className="pt-10">
            <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-sm lg:btn-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
