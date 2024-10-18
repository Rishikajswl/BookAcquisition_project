import React from 'react'
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
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
           
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="w-80 px-3 py-1 rounded-md border outline-none"
                {...register("name", { required: true })}
              />
              <br/>
              {errors.name && <span className="text-red-300">This field is required</span>}
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
              <span>Message</span>
              <br />
              <input
                type="textarea"
                placeholder="Enter your Message"
                className="w-80 px-3 py-1 rounded-md border outline-none"
              />

            </div>
            <div className="mt-4">
              <button className="bg-green-300 px-3 py-2 rounded-md hover:text-white">
                Submit
              </button>
              
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact