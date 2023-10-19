const AddProduct = () => {
  const handleAdd = (e) => {
    e.prevent.Default();
  };
  return (
    <div className="">
      <div className="container mx-auto my-1 md:my-10 lg:my-20 w-full max-w-xl rounded-md bg-purple-200">
        <form onSubmit={handleAdd} className="py-10">
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
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
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <input
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
                defaultValue="Pick one"
              >
                <option disabled value="Pick one">
                  Pick one
                </option>
                <option value="Star Wars">Star Wars</option>
                <option value="Harry Potter">Harry Potter</option>
                <option value="Lord of the Rings">Lord of the Rings</option>
                <option value="Planet of the Apes">Planet of the Apes</option>
                <option value="Star Trek">Star Trek</option>
              </select>
            </div>
          </div>
          <div className="form-control w-full mx-auto max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          {/* <div className="w-full input input-bordered mx-auto max-w-xs">
            <input className="btn w-full" type="submit" value="Add" />
          </div> */}
          <div className="form-control w-full mx-auto max-w-xs ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
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
              type="number"
              name="rating"
              placeholder="Rate out of 5"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="w-full mx-auto max-w-xs mt-2">
            <button className="btn w-full">ADD</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
