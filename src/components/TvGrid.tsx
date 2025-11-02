import useMedia from "../hooks/useMedia";
import MediaGrid from "./MediaGrid";

const TvGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useMedia();

  return (
    <MediaGrid
      data={data}
      error={error}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
};

export default TvGrid;
