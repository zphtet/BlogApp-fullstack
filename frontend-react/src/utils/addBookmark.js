import { errorToast, successToast } from "./toast";

const url = import.meta.env.VITE_BACKEND_URL;

const addBookmark = async (obj) => {
  console.log(obj);
  try {
    const data = await fetch(`${url}/bookmark`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    console.log(data);
    if (data.ok) {
      successToast("Added to Bookmark ✅");
    }
    if (!data?.ok) {
      errorToast("Error Add to Bookmark 🔥");
    }
  } catch (err) {
    errorToast("Error Add to Bookmark 🔥");
  }
};

export default addBookmark;
