import { useState, useEffect, useRef } from "react";
import TrendingMap from "./TrendingMap";
import { getAll } from "../helpers/get";

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
      console.error("Error fetching trending data:", error);
      setError("Failed to fetch trending data. Please try again later.");
    }
  };

  useEffect(() => {
    getAllTrending();
  }, []);


  const handleMouseDrag = (e) => {
    const carousel = carouselRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (event) => {
      isDown = true;
      startX = event.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    };

    const moveDrag = (event) => {
      if (!isDown) return;
      event.preventDefault();
      const x = event.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5; 
      carousel.scrollLeft = scrollLeft - walk;
    };

    const stopDrag = () => {
      isDown = false;
    };

    carousel.addEventListener("mousedown", startDrag);
    carousel.addEventListener("mousemove", moveDrag);
    carousel.addEventListener("mouseup", stopDrag);
    carousel.addEventListener("mouseleave", stopDrag);


    return () => {
      carousel.removeEventListener("mousedown", startDrag);
      carousel.removeEventListener("mousemove", moveDrag);
      carousel.removeEventListener("mouseup", stopDrag);
      carousel.removeEventListener("mouseleave", stopDrag);
    };
  };

  useEffect(() => {
    handleMouseDrag(); 
  }, []);

  return (
    <section>
      <div className="trending--main--container">
        <h1 className="trending--heading--text">Trending</h1>
        {error && <div className="error">{error}</div>}

        <div
          ref={carouselRef}
          className="carousel overflow-hidden whitespace-nowrap"
        >
          <TrendingMap trending={trending} />
        </div>
      </div>
    </section>
  );
};

export default Trending;