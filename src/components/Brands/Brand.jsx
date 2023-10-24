// import { Link } from "react-router-dom";

import { data } from "autoprefixer";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { brand_name, logo } = brand;
  const handleBrand = () => {
    // const newPath = `/products/${brand_name}`;
    // console.log(newPath);
    // const dior = newPath._id;
    // console.log(dior);
    
  }
  return (
    <div>
      <Link to={`/products/${brand_name}`} onClick={() => handleBrand(brand_name)}>
        <div className="car border flex-col mx-5 py-5 my-2 md:my-5 bg-purple-100 rounded-md">
          <figure className="px-10 pt-10 flex-col-1 ">
            <img
              src={logo}
              alt="brand-img"
              className="w-20 h-10 mx-auto text-center items-center rounded-xl"
            />
          </figure>
          <p className="mt-5 text-center text-black text-lg font-bold">
            Brand Name: {brand_name}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Brand;




/* eslint-disable react/prop-types */
// const Brand = ({ brand }) => {
//   const { brand_name, logo } = brand;

//   const handleBrand = (brand_name) =>{
//     console.log(brand_name);
//     fetch(`https://blushly-server-f746xt7d5-muhammad-sowrov.vercel.app/products/${brand_name}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//     })
    
//   }
  
//   return (
//     <div>
//       <div onClick={()=> handleBrand(brand_name)}  className="car border flex-col mx-5 py-5 my-2 md:my-5 bg-purple-100 rounded-md">
//           <figure className="px-10 pt-10 flex-col-1 ">
//             <img
//               src={logo}
//               alt="brand-img"
//               className="w-20 h-10 mx-auto text-center items-center rounded-xl"
//             />
//           </figure>
//           <p className="mt-5 text-center text-black text-lg font-bold">
//             Brand Name: {brand_name}
//           </p>
//         </div>
//     </div>
//   );
// };

// export default Brand;
