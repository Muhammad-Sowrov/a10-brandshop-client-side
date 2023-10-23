import { useLoaderData } from "react-router-dom";
import RevlonAll from "./RevlonAll";
import Swipers from "../../Swipers";

const Revlon = () => {
  const data = useLoaderData([]);
  // console.log(data);
  const filerRevlon = data.filter((revlon) => {
    return revlon.brand_name === "Revlon";
  });
  return (
    <div>
      <Swipers></Swipers>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filerRevlon.map((item) => (
          <RevlonAll key={item._id} item={item}></RevlonAll>
        ))}
      </div>
    </div>
  );
};

export default Revlon;
