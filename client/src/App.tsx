import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import Twitter from "./pages/Twitter";
import Youtube from "./pages/Youtube";



const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />         {/* Working good. */}
          <Route path="/signup" element={<Signup />} />        {/* Working good. */}
          <Route path="/login" element={<Login />} />          {/* Working good. */}

          <Route path="/dashboard" element={<DashboardLayout />} >
            <Route index element={<Dashboard />}/>
            <Route path="twitter" element={<Twitter />}/>
            <Route path="youtube" element={<Youtube />}/>
          </Route>

          <Route path="*" element={<ErrorPage />} />            {/* Working good. */}
        </Routes>
      </BrowserRouter>
    </>
  )
}




export default App;
