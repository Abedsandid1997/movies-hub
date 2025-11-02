import { createListCollection, Portal, Select } from "@chakra-ui/react";
import useMovieQueryStore from "../state-managment/movie-store";

const AgeFilter = () => {
  const setWithAdult = useMovieQueryStore((s) => s.setWithAdult);
  const withAdult = useMovieQueryStore((s) => s.movieQuery.withAdult);
  const currentAge = order.items.find((o) => o.value === withAdult);
  return (
    <Select.Root collection={order} size="sm" width="10rem">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Age">
            {withAdult ? currentAge?.label : "Age"}
          </Select.ValueText>
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {order.items.map((o, index) => (
              <Select.Item
                item={o}
                key={index}
                onClick={() => setWithAdult(o.value)}
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

export default AgeFilter;
const order = createListCollection({
  items: [
    { label: "Adults", value: true },
    { label: "No Adults", value: false },
  ],
});
