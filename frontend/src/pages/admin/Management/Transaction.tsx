import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { Link } from "react-router-dom";
import { OrderItemType, OrderType } from "../../../Types";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "asdsaasdas",
    quantity: 4,
    price: 2000,
  },
];

const Transaction = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pinCode: 2434341,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "asdnasjdhbn",
  });

  const updateHander = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };

  return (
    <div className="flex">
      <AdminSidebar />
      <div className="mt-5 mx-5 rounded-lg bg-white w-[45%] text-center shadow-md">
        <h2 className="text-center text-2xl my-4 font-semibold">ORDER ITEMS</h2>

        {order.orderItems.map((i) => {
          return (
            <ProductCard
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
            />
          );
        })}
      </div>

      <div className="mt-5 mx-2 rounded-lg bg-white w-[45%] justify-center shadow-md">
        <h2 className="text-center text-2xl my-4 font-semibold ">ORDER INFO</h2>
        <div className="my-5 flex flex-col text-left mx-10 ">
          <h2 className="text-lg my-4 font-semibold ">User Info</h2>
          <p>Name: {order.name}</p>
          <p>
            Address: {order.address}, {order.city}
          </p>
          <p>State: {order.state}</p>
          <p>Country: {order.country}</p>
          <p>Pincode: {order.pinCode}</p>
        </div>
        <div className="my-5 flex flex-col text-left mx-10 ">
          <h2 className="text-lg my-4 font-semibold">Amount Info</h2>
          <p>Subtotal: {order.subtotal}</p>
          <p>Shipping charges: {order.shippingCharges}</p>
          <p>Tax: {order.tax}</p>
          <p>Discount: {order.discount}</p>
          <p>Total: {order.total}</p>
        </div>
        <div className="my-5 flex flex-col text-left mx-10">
          <h2 className="text-lg my-4 font-semibold">Status Info</h2>
          <p>
            Status:{" "}
            <span
              className={
                order.status === "Delivered"
                  ? "text-purple-600"
                  : order.status === "Shipped"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {order.status}
            </span>
          </p>
        </div>
        <div className="my-5 flex flex-col text-left mx-10"></div>

        <button
          type="submit"
          className="bg-blue-700 text-white w-[83%] rounded-md py-1 justify-center text-lg m-4 mx-10 mb-8"
          onClick={updateHander}
        >
          Process Status
        </button>
      </div>
    </div>
  );
};

export default Transaction;

const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="flex">
    <img src={photo} alt={name} className=" mx-10 w-24 h-24" />
    <div className="text-left my-4">
      <Link to={`/product/${_id}`}>{name}</Link>
      <p>
        ${price} X {quantity} = ${price * quantity}
      </p>
    </div>
  </div>
);
