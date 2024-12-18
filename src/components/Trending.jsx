import { useState, useEffect, useRef } from "react";
import { getAll } from "../helpers/get";
import TrendingRow from "./TrendingRow";
import { handleMouseDrag } from "../helpers/handleMouseDrag";
import { useOutletContext } from "react-router";

const Trending = () => {
  const carouselRef = useRef(null);

  const { allFilms } = useOutletContext();

  // perrasytas kodas nes jau yra vienas fetch pada
  // const getAllTrending = async () => {
  //   try {
  //     const trendingData = await getAll();
  //     const trendingItems = trendingData.filter((item) => item.isTrending);
  //     setTrending(trendingItems);
  //     setError("");
  //   } catch (error) {
  //     setError("Error fetching trending data:", error);
  //   }
  // };
  const trendingItems = allFilms.filter((item) => item.isTrending);

  useEffect(() => {
    // getAllTrending();
    handleMouseDrag(carouselRef);
  }, []);

  return (
    <section>
      <h1 className="trending--heading--text flex-row py-6 md:pt-[2.06rem] xl:pt-[2.13rem] xl:pb-[2.38rem]">
        Trending
      </h1>
      <div>
        <div
          ref={carouselRef}
          className="carousel overflow-hidden whitespace-nowrap"
        >
          {trendingItems.map((trending, index) => (
            <TrendingRow key={index} trending={trending} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
