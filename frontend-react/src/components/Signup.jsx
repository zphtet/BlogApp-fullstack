import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="w-[min(420px,100%)] mx-auto  mt-12 py-auto ">
      <form className=" flex flex-col gap-5 ">
        <input className="input" type="text" placeholder="Your Name" />
        <input className="input" type="text" placeholder="Your Email" />
        <input className="input" type="password" placeholder="Your Password" />
        <input
          className="input"
          type="password"
          placeholder="Confirm Password"
        />
        <button type="submit" className="form-btn">
          SignUp
        </button>
      </form>
      <div className="mt-2">
        <p className="text-center ">
          Already have an account ?{" "}
          <Link to={"/login"} className="underline">
            {" "}
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
