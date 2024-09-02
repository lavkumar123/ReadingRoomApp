import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
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
    <Navbar/>
    <div className="flex h-screen items-center justify-center text-black">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 "
              >
                ✕
              </Link>
              <h3 className="font-bold text-4xl text-center">Contact Us</h3>
              <div className="mt-4 space-y-2 text-center ">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("name", { required: true })}
                ></input>
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2 text-center ">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("email", { required: true })}
                ></input>
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*password */}
              <div className="mt-4 space-y-2 text-center">
                <span>Message</span>
                <br />
                <textarea
                  placeholder="Enter your message"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  {...register("message", { required: true })}
                ></textarea>
                <br />
                {errors.message && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    <Footer/>
    </>
  )
}

export default Contact