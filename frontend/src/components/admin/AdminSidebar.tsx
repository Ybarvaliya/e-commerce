import {
  RiDashboardFill,
  RiShoppingBag3Fill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

const AdminSidebar = () => {
  // const location = useLocation();

  return (
    <aside className="mt-5 ml-4 text-lg bg-white w-1/6 p-5 h-full rounded-xl shadow-md">
      <div className="text-2xl mb-2 ">Logo.</div>
      <div className="text-slate-600 text-xl ml-3 my-6">DASHBOARD</div>
      <Item
        URL="/admin/dashboard"
        Icon={RiDashboardFill}
        title="Dashboard"
      ></Item>
      <Item
        URL="/admin/product"
        Icon={RiShoppingBag3Fill}
        title="Product"
      ></Item>
      <Item URL="/admin/customer" Icon={IoIosPeople} title="Customer"></Item>
      <Item
        URL="/admin/transaction"
        Icon={AiFillFileText}
        title="Transaction"
      ></Item>
      <div className="text-slate-600 text-xl ml-3 my-6 ">CHARTS</div>
      <Item URL="" Icon={FaChartBar} title="Bar"></Item>
      <Item URL="" Icon={FaChartPie} title="Pie"></Item>
      <Item URL="" Icon={FaChartLine} title="Line"></Item>
      <div className="text-slate-600 text-xl ml-3 my-6 ">APPS</div>
      <Item URL="" Icon={FaStopwatch} title="Stopwatch"></Item>
      <Item URL="" Icon={RiCoupon3Fill} title="Coupan"></Item>
      <Item URL="" Icon={FaGamepad} title="Toss"></Item>
    </aside>
  );
};

export default AdminSidebar;

interface Itemprops {
  URL: string;
  Icon: IconType;
  title: string;
}

const Item = ({ URL, Icon, title }: Itemprops) => {
  return (
    <Link to={URL} className="">
      <div className="flex ml-5 p-1 text-center">
        <Icon className="mt-1 mr-3"></Icon>
        <span>{title}</span>
      </div>
    </Link>
  );
};
