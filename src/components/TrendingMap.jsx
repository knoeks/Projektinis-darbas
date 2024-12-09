import TrendingRow from "./TrendingRow";

const TrendingMap = ({ trending }) => {
  const trendElements = trending.map((data, index) => (
    <TrendingRow key={index} trending={data} />
  ));

  return <>{trendElements}</>;
};

export default TrendingMap;

