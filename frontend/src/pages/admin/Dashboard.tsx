import AdminSidebar from "../../components/admin/AdminSidebar";
import { BarChart, DoughnutChart } from "../../components/admin/Charts";

import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import { BiMaleFemale } from "react-icons/bi";
import DashboardTable from "../../components/admin/DashboardTable";

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
            className="w-full border border-black m-2 text-md p-2 h-10 rounded-lg"
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

        {/* R&T & Inventory */}

        <div className="flex">
          <div className="bg-white w-4/6 rounded-lg m-2 ml-5 p-2">
            <h1 className="text-center text-xl my-2 font-semibold">
              Revenue & Transactions
            </h1>
            <BarChart
              title_1="Revenue"
              title_2="Transactions"
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 343, 556, 778, 455, 990]}
              bg_color_1="rgb(0,115,255)"
              bg_color_2="rgb(53, 162, 235, 0.8)"
            ></BarChart>
          </div>

          <Inventory></Inventory>
        </div>

        {/* Gender ratio & Top Transactions */}

        <div className="flex">
          <div className="bg-white m-2 w-1/3 rounded-lg">
            <h1 className="text-center text-xl my-2 font-semibold">
              Gender Ratio
            </h1>
            <DoughnutChart
              data={[12, 19]}
              labels={["Female", "Male"]}
              bgcolor={["hsl(340, 82%, 56%)", "rgba(53, 162, 235, 0.8)"]}
              cutout={90}
            ></DoughnutChart>

            <p className="">
              <BiMaleFemale></BiMaleFemale>
            </p>
          </div>

          <div className="bg-white m-2  rounded-lg">
            <DashboardTable></DashboardTable>
          </div>
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
      className="m-5 bg-slate-200 p-3 rounded-full h-20 w-20 place-items-center border"
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

const Inventory = () => {
  return (
    <div className="bg-white w-1/4 rounded-lg m-2 ml-5 h-auto">
      <h1 className="text-center text-xl m-2 my-4 font-semibold">Inventory</h1>
      <div className="m-4">
        <InventoryItem
          heading="Shoes"
          color="rgb(93, 63, 211)"
          value={40}
        ></InventoryItem>
        <InventoryItem
          heading="Laptops"
          color="rgb(93, 63, 211)"
          value={12}
        ></InventoryItem>
        <InventoryItem
          heading="Shirts"
          color="rgb(93, 63, 211)"
          value={100}
        ></InventoryItem>
        <InventoryItem
          heading="Geans"
          color="rgb(93, 63, 211)"
          value={80}
        ></InventoryItem>
        <InventoryItem
          heading="Camera"
          color="rgb(93, 63, 211)"
          value={57}
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
      <div className="m-1 basis-1/5">{heading}</div>
      <div className="basis-3/5 m-2 border rounded-lg">
        <div
          className={`rounded-lg h-full`}
          style={{ background: `${color}`, width: `${value}%` }}
        />
      </div>
      <div className="basis-1/5">{value}%</div>
    </div>
  );
};
