import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";


const DashboardLayout = () => {
  


  return (
    <>
      <Sidebar />
      <main className="ml-76 bg-[#f7f7ff]">
        <DashboardHeader />
        <Outlet />
      </main>
    </>
  )
}



export default DashboardLayout;

