import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { successToast, errorToast } from "../utils/toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, watch } = useForm();
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const fdata = new FormData();
    fdata.append("name", data.name);
    fdata.append("email", data.email);
    fdata.append("password", data.password);
    fdata.append("confirmPassword", data.confirmPassword);
    fdata.append("profile", data.profile[0]);

    try {
      setLoading(true);
      const url = import.meta.env.VITE_BACKEND_URL;
      const res = await fetch(`${url}/auth/signup`, {
        method: "POST",
        body: fdata,
      });

      const respData = await res.json();

      setLoading(false);
      console.log(respData);
      if (respData.status === "success") {
        successToast("Success! 👌");
        navigate("/");
        return;
      }
      errorToast("Error ! 🔥");
    } catch (e) {
      errorToast("Error ! 🔥");
      setLoading(false);
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
        {loading ? (
          <button
            disabled
            type="button"
            className="text-white text-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center cursor-pointer "
          >
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            Loading...
          </button>
        ) : (
          <button type="submit" className="form-btn">
            SignUp
          </button>
        )}
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
