import Trending from "./Trending";

const TrendingMap = ({ trending, setTrending }) => {


  const trendElements = trending.map(trend => (
    <Trending key={trending.isTrending} trend={trend} setTrending={setTrending} />
  ));

  return (
    <>
{trendElements}
        </>
  );
};

export default TrendingMap;