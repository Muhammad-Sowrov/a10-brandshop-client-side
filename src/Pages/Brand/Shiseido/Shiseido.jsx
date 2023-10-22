import { useLoaderData } from "react-router-dom";
import ShiseidoAll from "./ShiseidoAll";


const Shiseido = () => {
    const data = useLoaderData([]);
  // console.log(data);
  const filerShiseido = data.filter((shiseido) => {
    return shiseido.brand_name === "Shiseido";
  });
    return (
        <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {filerShiseido.map((item) => (
          <ShiseidoAll key={item._id} item={item}></ShiseidoAll>
        ))}
      </div>
    </div>
    );
};

export default Shiseido;