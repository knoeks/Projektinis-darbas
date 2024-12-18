import axios from "axios";

const url = "http://localhost:5001/data"

export const deleteOne = async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
  } catch (error) {
    console.error("Error during deletion:", error);
    throw error;
  }
}