import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-[min(420px,100%)] mx-auto   mt-12 py-auto ">
      <form className=" flex flex-col gap-5 ">
        {/* <input className="input" type="text" placeholder="Your Name" /> */}
        <input className="input" type="text" placeholder="Your Email" />
        <input className="input" type="password" placeholder="Your Password" />
        {/* <input
          className="input"
          type="password"
          placeholder="Confirm Password"
        /> */}
        <button type="submit" className="form-btn">
          Login
        </button>
      </form>
      <div className="mt-2">
        <p className="text-center ">
          Don't have an account ?{" "}
          <Link to={"/signup"} className="underline">
            {" "}
            SignUp
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
