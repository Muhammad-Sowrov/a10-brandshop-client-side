import { useLoaderData } from "react-router-dom";
import OlayAll from "./OlayAll";


const Olay = () => {
    const data = useLoaderData([]);
  // console.log(data);
  const filerOlay = data.filter((olay) => {
    return olay.brand_name === "Olay";
  });
    return (
        <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filerOlay.map((item) => (
          <OlayAll key={item._id} item={item}></OlayAll>
        ))}
      </div>
    </div>
    );
};

export default Olay;