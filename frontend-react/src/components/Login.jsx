import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { successToast, errorToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";
import useUser from "../Hook/useUser";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setUser } = useUser();
  const onSubmit = async (data) => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const fdata = new FormData();
    console.log(data);
    fdata.append("email", data.email);
    fdata.append("password", data.password);
    const res = await fetch(`${url}/auth/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const respData = await res.json();
    console.log(respData);
    if (respData.status === "success") {
      // Cookie.set("jwt", respData?.jwt, { expires: 7 });
      setUser(respData.data);
      successToast("Success Login 👌");
      navigate("/");
      return;
    }
    errorToast("Error Login 🔥");
  };
  const option = {
    required: true,
  };
  return (
    <div className="w-[min(420px,100%)] mx-auto   mt-12 py-auto ">
      <form className=" flex flex-col gap-5 " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          type="text"
          placeholder="Your Email"
          {...register("email", option)}
        />
        <input
          className="input"
          type="password"
          placeholder="Your Password"
          {...register("password", option)}
        />

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

export default Login;
