import { FormEvent, useState } from "react";
import { useParams } from 'react-router-dom';
import AdminSidebar from "../../../components/admin/AdminSidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const Product = () => {
  const { id } = useParams();

  const [name, setName] = useState<string>("Puma Shoes");
  const [price, setPrice] = useState<number>(3000);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const [nameUpdate, setNameUpdate] = useState<string>(name);
  const [priceUpdate, setPriceUpdate] = useState<number>(price);
  const [stockUpdate, setStockUpdate] = useState<number>(stock);
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo);

  const changeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhotoUpdate(reader.result);
      };
    }
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="mt-5 ml-5 rounded-lg bg-white w-full text-center shadow-lg">
        <div className="flex justify-between mx-20 mt-10">
          <span>ID - {id}</span>
          {stock > 0 ? (
            <span className="text-green-600">{stock} Available</span>
          ) : (
            <span className="text-red-600">Not Available</span>
          )}
        </div>
        <img
          src={photo}
          alt="Image of Product"
          className="mx-[10%] my-10 w-[80%] h-[60%] rounded-lg shadow-md"
        />
        <h2 className="text-center text-lg my-4 font-semibold">{name}</h2>
        <h2 className="text-center text-2xl my-4 font-semibold">${price}</h2>
      </div>

      <div className="mt-5 mx-2 rounded-lg bg-slate-100 w-full flex justify-center">
        <form
          onSubmit={onSubmitHandler}
          className="bg-white rounded-md my-8 w-[80%] shadow-lg"
        >
          <h2 className="text-center text-2xl my-4 font-semibold">Manage</h2>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Name</label>
            <input
              required
              type="text"
              placeholder="Name"
              value={nameUpdate}
              onChange={(e) => setNameUpdate(e.target.value)}
              className="border p-2 rounded-md my-1 mr-10"
            />
          </div>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Price</label>
            <input
              required
              type="number"
              placeholder="Price"
              value={priceUpdate}
              onChange={(e) => setPriceUpdate(Number(e.target.value))}
              className="border p-2 rounded-md my-1"
            />
          </div>
          <div className="my-5 flex flex-col text-left mx-10">
            <label className="text-lg">Stock</label>
            <input
              required
              type="number"
              placeholder="Stock"
              value={stockUpdate}
              onChange={(e) => setStockUpdate(Number(e.target.value))}
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

          {photo && (
            <img src={photoUpdate} alt="New Image" className=" mx-10 w-24 h-24"></img>
          )}

          <button
            type="submit"
            className="bg-blue-700 text-white w-[83%] rounded-md py-1 justify-center text-lg m-4 mx-10 mb-8"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
