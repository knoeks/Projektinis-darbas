import axios from "axios";

const url = "http://localhost:5001/items";

export const post = async (data) => {
  const response = await axios.post(url, data);

  return response.data;
}