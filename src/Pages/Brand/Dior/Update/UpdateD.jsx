import { useLoaderData } from "react-router-dom";

const UpdateD = () => {
  const data = useLoaderData();
//   console.log(dior);
  const { _id, image, name, brand_name, type, price, rating, description } =
    data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.img_url.value;
    const name = form.name.value;
    const brand_name = form.brand_name.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const UpdateProducts = {
      image,
      name,
      brand_name,
      type,
      price,
      description,
      rating,
    };
    console.log(UpdateProducts);
    fetch(`http://localhost:5000/products/id/${_id}`, {
      method: "PUT",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(UpdateProducts)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  
  };
  return (
    <div>
      <div className="container mx-auto my-1 md:my-10 lg:my-20 w-full max-w-xl rounded-md bg-purple-200">
        <form onSubmit={handleUpdate} className="py-10">
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              defaultValue={image}
              type="text"
              name="img_url"
              placeholder="Image Url"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={name}
              type="text"
              name="name"
              placeholder="Name of Your Product"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
              defaultValue={brand_name}
              type="text"
              name="brand_name"
              placeholder="Brand Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="mx-auto w-full max-w-xs">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                className="select select-bordered"
                defaultValue={type}
                name="type"
              >
                <option disabled value="Pick one">
                  Pick one
                </option>
                <option value="Perfume">Perfume</option>
                <option value="Sunscreen">Sunscreen</option>
                <option value="Make Up">Make Up</option>
                <option value="Skin Protector">Skin Protector</option>
                <option value="Lipstick">Lipstick</option>
                <option value="Natural Cream">Natural Cream</option>
              </select>
            </div>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              defaultValue={price}
              type="number"
              name="price"
              placeholder="Price $"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                defaultValue={description}
                name="description"
                className="textarea textarea-bordered h-24"
                placeholder="Short Description"
              ></textarea>
            </div>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              defaultValue={rating}
              type="number"
              name="rating"
              placeholder="Rate out of 5"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full mx-auto max-w-xs mt-2">
            <button className="btn w-full">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateD;
