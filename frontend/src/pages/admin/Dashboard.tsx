import AdminSidebar from "../../components/admin/AdminSidebar";

import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <main className="mt-5 mx-2 rounded-lg bg-slate-300 w-full">
        {/* searchBar */}

        <div className="flex">
          <span className="m-2 mt-5 ml-3">
            <BsSearch></BsSearch>
          </span>
          <input
            type="text"
            className="w-full border border-black m-2 text-md p-3 h-10 rounded-md"
          />
          <FaRegBell className="m-2 mt-5 "></FaRegBell>
          <img src="" alt="user_image" className="m-2 mt-5 " />
        </div>

        {/* Small Card Boards */}

        <div className="flex">
          <SmallCard title="Revenue" num="$400000" percentage={40}></SmallCard>
          <SmallCard title="Users" num="400" percentage={-14}></SmallCard>
          <SmallCard
            title="Transactions"
            num="2300"
            percentage={60}
          ></SmallCard>
          <SmallCard title="Products" num="1000" percentage={30}></SmallCard>
        </div>

        {/* R&T Chart & Inventory */}

        <div className="flex">
          <RTChart></RTChart>
          <Inventory></Inventory>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

interface smallCardProps {
  title: string;
  num: string;
  percentage: number;
}

const SmallCard = ({ title, num, percentage }: smallCardProps) => {
  const up = "rgb(144, 238, 144)";
  const down = "rgb(255, 127, 127)";
  return (
    <div className="bg-white p-2 m-5 rounded-md flex flex-shrink-0">
      <div className="ml-3 mt-5 mr-2">
        <div className="m-1 text-slate-700">{title}</div>
        <div className="text-xl m-1 font-semibold">{num}</div>
      </div>

      {percentage > 0 ? (
        <Disk percentage={percentage} color={up}></Disk>
      ) : (
        <Disk percentage={percentage} color={down}></Disk>
      )}
    </div>
  );
};

interface diskProp {
  percentage: number;
  color: string;
}

const Disk = ({ percentage, color }: diskProp) => {
  return (
    <div
      className="m-5 bg-slate-200 p-3 rounded-full h-20 w-20 place-items-center"
      style={{
        background: `conic-gradient(
    ${color} ${(Math.abs(percentage) / 100) * 360}deg,
  rgb(255, 255, 255) 0
)`,
      }}
    >
      <div className="flex text-md mt-4 font-bold">
        {percentage > 0 ? (
          <HiTrendingUp className="mr-1 mt-2 text-green-600"></HiTrendingUp>
        ) : (
          <HiTrendingDown className="mr-1 mt-2 text-red-600"></HiTrendingDown>
        )}
        {percentage}%
      </div>
    </div>
  );
};

const RTChart = () => {
  return (
    <div className="bg-white h-60 w-4/6 rounded-lg m-2 ml-5">
      <h1 className="text-center text-xl m-2 font-semibold">
        Revenue & Transactions
      </h1>
    </div>
  );
};

const Inventory = () => {
  return (
    <div className="bg-white w-1/4 rounded-lg m-2 ml-5">
      <h1 className="text-center text-xl m-2 font-semibold">Inventory</h1>
      <div className="m-4">
        <InventoryItem
          heading="Laptops"
          color="rgb(137, 196, 244)"
          value={12}
        ></InventoryItem>
        <InventoryItem
          heading="Shoes"
          color="rgb(137, 196, 244)"
          value={40}
        ></InventoryItem>
        <InventoryItem
          heading="Camera"
          color="rgb(137, 196, 244)"
          value={57}
        ></InventoryItem>
        <InventoryItem
          heading="Geans"
          color="rgb(137, 196, 244)"
          value={80}
        ></InventoryItem>
        <InventoryItem
          heading="Shirts"
          color="rgb(137, 196, 244)"
          value={100}
        ></InventoryItem>
      </div>
    </div>
  );
};

interface InventoryProps {
  heading: string;
  color: string;
  value: number;
}

const InventoryItem = ({ heading, color, value }: InventoryProps) => {
  return (
    <div className="flex">
      <div className="m-1 basis-1/4">{heading}</div>
      <div className="basis-2/4 m-1">
        <div
          className="px-2 rounded-lg"
          style={{ backgroundColor: color, width: `${value}%` }}
        ></div>
      </div>
      <div className="basis-1/4">{value}%</div>
    </div>
  );
};
