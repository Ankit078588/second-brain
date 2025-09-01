import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/ui/Button"
import InputBox from "../components/ui/InputBox";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";



const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSignup() {
    if(!name.trim() || !email.trim() || !password.trim()) {
      return toast.error("All fields are required.");
    }

    try {
      const res = await axios.post('http://localhost:3000/api/auth/register', {name, email, password}, {
        credientials: true
      });

      toast.success(res.data.message);
      navigate('/login');
    } catch(e) {
      console.log(e);
      toast.error(e.response.data.message)
    }
  }



  return (
    <div className="bg-[#f7f7ff] w-screen h-screen flex justify-center items-center">
        <div className="w-90 bg-white rounded-lg px-5 py-10 shadow">
            <div>
                <h1 className="text-3xl font-semibold text-center">Signup Form</h1>
                <p className="text-sm text-gray-700 text-center mt-3">To continue, Please Signup to your account.</p>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                <InputBox placeholder="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <InputBox placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <InputBox placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button variant="primary" onClick={handleSignup} text="Signup" />
            </div>


            <div>
            <p className="text-sm text-gray-700 text-center mt-6">
              <span className="mr-1">Already have an account? </span>
              <span className="text-blue-800 font-semibold underline"><Link to='/login'>Login</Link></span>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Signup;