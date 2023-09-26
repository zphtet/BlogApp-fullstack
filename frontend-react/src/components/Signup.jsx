import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.profile[0]);

    const fdata = new FormData();
    fdata.append("name", data.name);
    fdata.append("email", data.email);
    fdata.append("password", data.password);
    fdata.append("confirmPassword", data.confirmPassword);
    fdata.append("profile", data.profile[0]);

    const url = import.meta.env.VITE_BACKEND_URL;
    const res = await fetch(`${url}/auth/signup`, {
      method: "POST",
      body: fdata,
    });
    const respData = await res.json();
    console.log(respData);
    if (respData.status === "success") {
      alert("Success");
    }
  };

  const option = {
    required: true,
  };

  return (
    <div className="w-[min(420px,100%)] mx-auto  mt-12 py-auto ">
      <form className=" flex flex-col gap-5 " onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input"
          {...register("name", {
            ...option,
            minLength: 4,
            message: "At least four characters required",
          })}
          type="text"
          placeholder="Your Name"
        />
        <input
          className="input"
          {...register("email", option)}
          type="email"
          placeholder="Your Email"
        />
        <input
          className="input"
          {...register("password", { ...option, minLength: 6 })}
          type="password"
          placeholder="Your Password"
        />

        <input
          className="input"
          {...register("confirmPassword", {
            ...option,
            validate: (val) => {
              if (watch("password") != val) {
                return "Your passwords do no match";
              }
            },
          })}
          type="password"
          placeholder="Confirm Password"
        />
        <div>
          <label htmlFor="profile">Profile Picture</label>
          <input
            className="input cursor-pointer"
            id="profile"
            type="file"
            accept="image/*"
            {...register("profile", option)}
            placeholder="profile picture"
          />
        </div>
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
