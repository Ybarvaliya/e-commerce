import AdminSidebar from "../../components/admin/AdminSidebar";

import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar></AdminSidebar>
      <main className="mt-5 mx-2 rounded-lg bg-slate-300 w-full">
       
        {/* searchBar */}
        <div className="flex">
          <span className="m-2 mt-5 ml-3">
          <BsSearch ></BsSearch>
          </span>
          <input type="text" className="w-full border border-black m-2 text-md p-3 h-10 rounded-md"/>
          <FaRegBell className="m-2 mt-5 "></FaRegBell>
          <img src="" alt="user_image" className="m-2 mt-5 " />
        </div>

        {/* Small Card Boards */}

        <div className="flex">
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
            <SmallCard></SmallCard>
        </div>

        
      </main>
    </div>
  );
};

export default Dashboard;

const SmallCard = () => {
  return <div className="bg-white p-2 m-4 rounded-md">
  <div className="flex">
      <div>
        <div>
          Revenue
        </div>
        <div>
          $340000
        </div>
        <div>
          40% UP
        </div>
      </div>
      <div className="m-5">
        GRAPH
      </div>
  </div>
</div>
}
