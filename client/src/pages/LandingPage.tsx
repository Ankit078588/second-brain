import { Link } from "react-router-dom";


// export default function LandingPage() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-[#f7f7ff] via-[#f0f0ff] to-white overflow-hidden">
//       {/* Dotted circle decoration */}
//       <div className="absolute top-40 left-1/2 w-[600px] h-[600px] rounded-full border border-dotted border-gray-300 opacity-30 -translate-x-1/2"></div>

//       {/* Another faint circle */}
//       <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
      
//       {/* Page Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
//         <h1 className="text-5xl font-bold text-gray-900">Beautiful UI, crafted with precision</h1>
//         <p className="mt-4 text-lg text-gray-600 max-w-xl">
//           Build stunning interfaces with our modular design system. Mix and match components to create unique layouts.
//         </p>

//         <div className="mt-6 flex gap-4">
//           <button className="px-6 py-3 bg-black text-white rounded-xl shadow-md">Get Started</button>
//           <button className="px-6 py-3 bg-white border rounded-xl shadow-md">Live Preview</button>
//         </div>
//       </div>
//     </div>
//   )
// }



export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#f7f7ff] via-[#f0f0ff] to-white overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-1/2 w-[600px] h-[600px] rounded-full border border-dotted border-gray-300 opacity-30 -translate-x-1/2"></div>
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-purple-100 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blue-100 opacity-20 blur-3xl"></div>

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-10 py-6">
        <div className="text-2xl font-bold text-gray-900">SECOND BRAIN</div>
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><a href="#solutions" className="hover:text-gray-900">Solutions</a></li>
          <li><a href="#enterprise" className="hover:text-gray-900">Enterprise</a></li>
          <li><a href="#opensource" className="hover:text-gray-900">Open Source</a></li>
          <li><a href="#pricing" className="hover:text-gray-900">Pricing</a></li>
          <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
        </ul>
        <div className="flex items-center gap-4">
          <Link to='/login'> <button className="px-4 py-2 text-gray-800 hover:text-gray-900 cursor-pointer">Log in</button> </Link>
          <Link to='/signup'>  <button className="px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow-md hover:scale-105 transition cursor-pointer">Sign up</button> </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <span className="bg-yellow-200 text-yellow-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
          🚀 #1 Product of the Day on Product Hunt
        </span>

        <h1 className="mt-6 text-6xl font-extrabold text-gray-900 leading-tight">
          Meet Your 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">AI Email Assistant</span> 
          <br /> That Actually Works
        </h1>
        
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          Cut your email time in half. Inbox Zero intelligently automates responses, organizes your inbox, 
          and helps you reach inbox zero in record time. For Gmail and Outlook.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-xl shadow-lg hover:scale-105 transition">
            Get Started for Free
          </button>
          <button className="px-6 py-3 bg-white border rounded-xl shadow-md hover:bg-gray-50">
            Live Demo
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-500">Trusted by <strong>15,000+</strong> productive users</p>
      </div>
    </div>
  )
}
