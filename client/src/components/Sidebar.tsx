import { FaBrain } from "react-icons/fa6";
import SidebarItem from "./ui/SidebarItem";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BiSolidDashboard } from "react-icons/bi";
import { Link } from "react-router-dom";



const Sidebar = () => {
  return (
    <div className="w-76 h-screen p-3 bg-gray-50 fixed border-r-2 border-gray-200">
      <div className="flex items-center gap-2 text-3xl">
        <FaBrain className="text-purple-600"/>
        <span className="text-slate-700 font-semibold">Second Brain</span>
      </div>
      <div className="px-1 py-4">
          <Link to='/dashboard'> <SidebarItem title='Home' icon={<BiSolidDashboard />} /> </Link>
          <Link to='/dashboard/twitter'> <SidebarItem title='Twitter' icon={<FaTwitter />} /> </Link>
          <Link to='/dashboard/youtube'> <SidebarItem title='Youtube' icon={<FaYoutube />} /> </Link>
      </div>
    </div>
  )
}



export default Sidebar;