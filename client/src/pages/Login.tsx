import { Link } from "react-router-dom"
import Button from "../components/ui/Button"
import InputBox from "../components/ui/InputBox"



const Login = () => {
  return (
    <div className="bg-[#f7f7ff] w-screen h-screen flex justify-center items-center">
        <div className="w-90 bg-white rounded-lg px-5 py-10 shadow">
            <div>
                <h1 className="text-3xl font-semibold text-center">Login Form</h1>
                <p className="text-sm text-gray-700 text-center mt-3">To continue, Please Login to your account.</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <InputBox placeholder="email" value={'email'} />
                <InputBox placeholder="password" value={'password'} />
                <Button variant="primary" text="Login"  />
            </div>
            <div>
            <p className="text-sm text-gray-700 text-center mt-6">
              <span className="mr-1">Don't have an account? </span>
              <span className="text-blue-800 font-semibold underline"><Link to='/signup'>Signup</Link></span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Login