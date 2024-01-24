import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="mt-5 mx-2 rounded-lg bg-slate-100 w-full flex justify-center">
        <form action="" className="bg-white rounded-md my-8 w-1/3">
          <h2 className="text-center text-2xl my-4 font-semibold">
            New Product
          </h2>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Name</label>
            <input
              required
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded-md my-1 mr-10"
            />
          </div>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="border p-2 rounded-md my-1"
            />
          </div>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Stock</label>
            <input
              required
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(Number(e.target.value))}
              className="border p-2 rounded-md my-1"
            />
          </div>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Photo</label>
            <input
              required
              type="file"
              onChange={changeImageHandler}
              className="border p-2 rounded-md my-1"
            />
          </div>

          {photo && <img src={photo} alt="New Image" className=" mx-10 w-24 h-24"></img>}

          <button
            type="submit"
            className="bg-blue-700 text-white w-[83%] rounded-md py-1 justify-center text-lg m-4 mx-10"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
