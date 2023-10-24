import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const One = () => {
    const x = useLoaderData([])
  const [data, setData] = useState([]);
  const {_id} = useParams([]);
  console.log(_id);
  useEffect(()=> {

  },[])
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://i.ibb.co/MhRLsm2/diorfahrenheitcs.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default One;
