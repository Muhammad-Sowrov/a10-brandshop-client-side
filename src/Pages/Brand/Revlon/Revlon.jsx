import { useLoaderData } from "react-router-dom";
import RevlonAll from "./RevlonAll";

const Revlon = () => {
  const data = useLoaderData([]);
  // console.log(data);
  const filerDior = data.filter((dior) => {
    return dior.brand_name === "Revlon";
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filerDior.map((item) => (
          <RevlonAll key={item._id} item={item}></RevlonAll>
        ))}
      </div>
    </div>
  );
};

export default Revlon;
