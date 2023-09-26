import toast from "react-hot-toast";

export const successToast = (message) => {
  return toast.success(message, {
    iconTheme: {
      primary: "#6246EA",
      secondary: "#fff",
    },
  });
};

export const errorToast = (message) => {
  return toast.error(message);
};

export const promiseToast = (promise, { loading, success, error }) => {
  return toast.promise(promise, {
    loading: loading || "Loading",
    success: success || "Got the data",
    error: error || "Error when fetching",
  });
};
