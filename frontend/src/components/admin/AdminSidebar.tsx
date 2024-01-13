import { RiDashboardFill, RiShoppingBag3Fill, RiCoupon3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { FaChartBar, FaChartPie, FaChartLine, FaStopwatch, FaGamepad } from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <aside className="ml-4 text-lg">
      <div className="text-2xl m-3">Logo.</div>
      <div className="text-slate-700 text-xl m-3">DASHBOARD</div>
      <div className="ml-4 m-1 p-1">
        <RiDashboardFill></RiDashboardFill> Dashboard
      </div>
      <div className="ml-4 m-1 p-1">
        <RiShoppingBag3Fill></RiShoppingBag3Fill> Product
      </div>
      <div className="ml-4 m-1 p-1">
        <IoIosPeople></IoIosPeople>Customer
      </div>
      <div className="ml-4 m-1 p-1">
        {<AiFillFileText></AiFillFileText>}Transaction
      </div>
      <div className="text-slate-700 text-xl m-3">CHARTS</div>
      <div className="ml-4 m-1 p-1"> {<FaChartBar></FaChartBar>}Bar</div>
      <div className="ml-4 m-1 p-1">{<FaChartPie></FaChartPie>}Pie</div>
      <div className="ml-4 m-1 p-1">{<FaChartLine></FaChartLine>}Line</div>
      <div className="text-slate-700 text-xl m-3">APPS</div>
      <div className="ml-4 m-1 p-1">{<FaStopwatch></FaStopwatch>}stopwatch</div>
      <div className="ml-4 m-1 p-1">{<RiCoupon3Fill></RiCoupon3Fill>}Coupan</div>
      <div className="ml-4 m-1 p-1">{<FaGamepad></FaGamepad>}Toss</div>
    </aside>
  );
};

export default AdminSidebar;
