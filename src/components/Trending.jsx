import { getTrending } from "../helpers/get";
import { useState, useEffect } from "react";

const Trending = () => {
    const [trending, setTrending] = useState([]);
    const [error, setError] = useState("");
  
    const getAllTrending = async () => {
      try {
        const trending = await getTrending();
        setTrending(trending);
        setError("");
      } catch (error) {
        setError(error.message);
      }
    }
  
    useEffect(() => {
      getAllTrending();
    }, [])

    return ( <>
    <section>
        <div className="trending--main--container">
            <h1 className="trending--heading--text">Trending</h1>
            
            </div></section></> );
}

export default Trending;