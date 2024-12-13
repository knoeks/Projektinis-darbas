import { useState, useEffect, useRef } from "react";
import { getAll } from "../helpers/get";
import TrendingRow from "./TrendingRow";
import { handleMouseDrag } from "../helpers/handleMouseDrag";

const Trending = () => {
  const [trending, setTrending] = useState([]);
  const [error, setError] = useState("");
  const carouselRef = useRef(null);

  const getAllTrending = async () => {
    try {
      const trendingData = await getAll();
      const trendingItems = trendingData.filter((item) => item.isTrending);
      setTrending(trendingItems);
      setError("");
    } catch (error) {
      setError("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    getAllTrending();
    handleMouseDrag(carouselRef);
  }, []);

  return (
    <section className="trending-full">
      <h1 className="trending--heading--text flex-row">Trending</h1>
      <div>
        {error && <div className="error">{error}</div>}
        <div
          ref={carouselRef}
          className="carousel overflow-hidden whitespace-nowrap"
        >
          {trending.map((data, index) => (
            <TrendingRow key={index} trending={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
