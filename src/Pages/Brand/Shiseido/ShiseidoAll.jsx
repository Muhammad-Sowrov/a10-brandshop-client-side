import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";

const ShiseidoAll = ({ item }) => {
  const { _id, image, name, brand_name, type, price, rating, description } =
    item;
  return (
    <div className="h-[80v]">
      <div className="card border mx-5 py-5 my-2 md:my-5 bg-gray-100 rounded-md">
        <div className="grid grid-cols-2">
          <figure className="px-10 pt-10  ">
            <img
              src={image}
              alt="brand-img"
              className="text-center w-full sm:h-40 md:h-40 lg:h-60 mx-auto items-start rounded-xl"
            />
          </figure>
          <div>
            <p className="mt-5 text-black text-base font-bold">Name: {name}</p>
            <p className="mt-5 text-black text-base font-bold">
              Brand: {brand_name}
            </p>
            <p className="mt-5 text-black text-base font-bold">Type: {type}</p>
            <p className="mt-5 text-black text-base font-bold">
              Price: {price} $
            </p>
            <p className="mt-5 flex items-center text-black text-lg font-bold">
              Rating
              <GrStar className="text-purple-500" />: {rating}/5
            </p>
            <div className="flex mt-5 gap-2">
              <Link to={`/updateS/${_id}`}>
                <button className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-sm lg:btn-md">
                  Update
                </button>
              </Link>
              <Link to={`/detailsS/${_id}`}>
                <button className="btn btn-outline btn-success btn-xs sm:btn-sm md:btn-sm lg:btn-md">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShiseidoAll;
