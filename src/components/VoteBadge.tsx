import { Badge } from "@chakra-ui/react";

const VoteBadge = ({ vote }: { vote: number }) => {
  const color = vote <= 5 ? "red" : vote <= 7 ? "orange" : "green";
  return (
    <Badge size="lg" colorPalette={color}>
      {Math.round(vote)}
    </Badge>
  );
};

export default VoteBadge;
