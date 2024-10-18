import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"

function Signup() {
  const location=useLocation()
  const navigate=useNavigate()
  const from = location.state?.from?.pathname || "/"
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = async (data) => {
        const userInfo={
          fullname:data.fullname,
          email:data.email,
          password:data.password,
        }
        await axios.post("http://localhost:4001/user/signup",userInfo)
        .then((res)=>{
          console.log(res.data);
          if(res.data){
            alert("Signup successfully")
            navigate(from,{replace:true})
          }
          localStorage.setItem("Users",JSON.stringify(res.data.user))
        }).catch((err)=>{
          if(err.response){
            console.log(err);
            alert("Error:"+ err.response.data.message) 
          }
        })
      };
  return (
    <>
      <div className=" flex h-screen items-center justify-center ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
           
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 rounded-md border outline-none"
                {...register("fullname", { required: true })}
              />
              <br/>
              {errors.fullname && <span className="text-red-300">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 rounded-md border outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className="text-red-300">This field is required</span>}

            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 rounded-md border outline-none"
                {...register("password", { required: true })}
              />
              <br/>
              {errors.password && <span className="text-red-300">This field is required</span>}

            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-green-300 px-3 py-2 rounded-md hover:text-white">
                Signup
              </button>
              <p>
                Have Account?{" "}
                <button
                  className="cursor-pointer underline text-blue-500"
                  onClick={()=>document.getElementById("my_modal_3").showModal()   
                  }
                >
                  Login
                </button>{" "}
                <Login />
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
