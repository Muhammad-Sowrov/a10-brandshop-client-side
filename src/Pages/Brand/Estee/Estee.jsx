import { useLoaderData } from "react-router-dom";
import EsteAll from "./EsteAll";
import Swipers from "../../Swipers";

const Estee = () => {
  const data = useLoaderData([]);
  const filterEstee = data.filter((estee) => {
    return estee.brand_name === "Estee Lauder";
  });
  return (
    <div>
      <Swipers></Swipers>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filterEstee.map((item) => (
          <EsteAll key={item._id} item={item}></EsteAll>
        ))}
      </div>
    </div>
  );
};

export default Estee;
