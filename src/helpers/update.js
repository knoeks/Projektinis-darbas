import axios from "axios";

const url = "http://localhost:5000/data"

export const updateOne = async (id, data) => {
  console.log(id, data);
  
  await axios.patch(`${url}/${id}`, data);
}