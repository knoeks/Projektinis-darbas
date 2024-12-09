const TrendingRow = ({ trending }) => {
    const { title, thumbnail, year, category, rating } = trending;
  
    return (
      <div className="inline-block mx-2">
        <div className="border bg-neutral-400 bg-opacity-10">
          <div>
            {thumbnail?.trending?.large ? (
              <img
                className="w-full trending--thumbnail"
                src={thumbnail.trending.large}
                alt={title}
              />
            ) : (
              "No Cover"
            )}
          </div>
          <div className="p-2">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p>
              {year} | {category} | {rating}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TrendingRow;