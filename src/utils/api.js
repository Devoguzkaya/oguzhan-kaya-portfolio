import axios from "axios";
import { toast } from "react-toastify";

export const handleHireRequest = async (name, email) => {
  const loadingToast = toast.loading("Sending your request...");

  try {
    const response = await axios.post(
      "https://reqres.in/api/users",
      {
        name: name,
        email: email,
        message: "Let's collaborate on a new project!",
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres-free-v1",
        },
      }
    );

    console.log("✅ Gönderim başarılı:", response.data);

    toast.update(loadingToast, {
      render: "Request sent successfully! 🚀",
      type: "success",
      isLoading: false,
      autoClose: 3000,
    });
  } catch (error) {
    console.error("❌ Gönderim hatası:", error);

    toast.update(loadingToast, {
      render: "Something went wrong ❌",
      type: "error",
      isLoading: false,
      autoClose: 3000,
    });
  }
};
