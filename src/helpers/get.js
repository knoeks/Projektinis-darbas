import axios from "axios";

const url = "http://localhost:5000/data"

export const getAll = async () => {
  const response = await axios.get(url);

  return response.data;
}

export const getTrending = async (isTrending) => {
  const response = await axios.get(`${url}/${isTrending}`);

  return response.data;
}