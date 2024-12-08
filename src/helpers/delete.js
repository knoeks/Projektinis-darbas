import axios from "axios";

const url = "http://localhost:5001/items"

export const deleteOne = async (id) => {
  await axios.delete(`${url}/${id}`);
}