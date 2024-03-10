import { Box, Button } from "@mui/material";
import { useState } from "react";
import { SortComponent } from "../../interfaces";

const SortAlphabetical = ({ handleClick, click }: SortComponent) => {
  const [sortPodcasts, setSortPodcasts] = useState<string>("Order A-Z");
  const handleSortButton = () => {
    click ? setSortPodcasts("Order Z-A") : setSortPodcasts("Order A-Z");
    handleClick();
  };
  return (
    <Button
      variant="outlined"
      sx={{
        color: "white",
        border: "solid 1px white"
      }}
      onClick={handleSortButton}
    >
      {sortPodcasts}
    </Button>
  );
};

export default SortAlphabetical;
