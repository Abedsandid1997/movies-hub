import { createListCollection, Portal, Select } from "@chakra-ui/react";
import useMovieQueryStore from "../state-managment/movie-store";
import useMediaTypeStore from "../state-managment/type-store";

const OrderBySelector = () => {
  const type = useMediaTypeStore((s) => s.type);
  const combinedOptions = [...(orderOptions[type] || []), ...orderOptions.all];

  const order = createListCollection({
    items: combinedOptions,
  });
  const setSortBy = useMovieQueryStore((s) => s.setSortBy);
  const sortBy = useMovieQueryStore((s) => s.movieQuery.sortBy);
  const currentOrder = order.items.find((o) => o.value === sortBy);
  return (
    <Select.Root collection={order} size="sm" width="10rem">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Sort by">
            {sortBy ? currentOrder?.label : "Sort by"}
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {order.items.map((o) => (
              <Select.Item
                item={o}
                key={o.value}
                onClick={() => setSortBy(o.value)}
              >
                {o.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default OrderBySelector;
const orderOptions = {
  movie: [
    { label: "Release Date Ascending", value: "release_date.asc" },
    { label: "Release Date Descending", value: "release_date.desc" },
    { label: "Title A → Z", value: "title.asc" },
    { label: "Title Z → A", value: "title.desc" },
  ],
  tv: [
    { label: "First Air Date Ascending", value: "first_air_date.asc" },
    { label: "First Air Date Descending", value: "first_air_date.desc" },
    { label: "Name A → Z", value: "name.asc" },
    { label: "Name Z → A", value: "name.desc" },
  ],
  all: [
    { label: "Original Name A → Z", value: "original_name.asc" },
    { label: "Original Name Z → A", value: "original_name.desc" },
    { label: "Popularity Low → High", value: "popularity.asc" },
    { label: "Popularity High → Low", value: "popularity.desc" },
    { label: "Rating Low → High", value: "vote_average.asc" },
    { label: "Rating High → Low", value: "vote_average.desc" },
    { label: "Vote Count Low → High", value: "vote_count.asc" },
    { label: "Vote Count High → Low", value: "vote_count.desc" },
  ],
};
