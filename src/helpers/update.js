import axios from "axios";

const url = "http://localhost:5001/data"

export const updateOne = async (id, data) => {
  await axios.put(`${url}/${id}`, data);
}