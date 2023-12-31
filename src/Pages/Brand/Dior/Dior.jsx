import { useLoaderData } from "react-router-dom";
import DiorAll from "./DiorAll";
import Swipers from "../../Swipers";

const Dior = () => {
  const data = useLoaderData([]);
  // console.log(data);
  const filterDior = data.filter((dior) => {
    return dior.brand_name === "Dior";
  });
  // console.log(filterDior);
  return (
    <div>
      <Swipers></Swipers>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filterDior.map((item) => (
          <DiorAll key={item._id} item={item}></DiorAll>
        ))}
      </div>
    </div>
  );
};

export default Dior;
