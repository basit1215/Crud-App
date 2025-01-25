import toast from "react-hot-toast";
import apiClient from "./axios";

const getReq = async (path) => {
  try {
    const response = await apiClient.get(path);
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


const postReq = async (path,data) => {
    try {
      const response = await apiClient.post(path,data);
      toast.success(response?.data?.message);
      return response;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.error("Error fetching data:", error);
    }
  };
  

  const deleteReq = async (path) => {
    try {
      const response = await apiClient.delete(path);
      return response;
    } catch (error) {
      console.error("Error Deleting data:", error);
    }
  };
  

  
  const putReq = async (path,data) => {
    try {
      const response = await apiClient.put(path,data);
      return response;
    } catch (error) {
      console.error("Error Updating data:", error);
    }
  };
  
  export {getReq, putReq, deleteReq,postReq}