import Image from "next/image";
import FilterIcon from "public/assets/icons/filter-icon.svg";
import { FilterButton, FilterWrapper } from "./Header.style";
import { FormattedMessage } from "react-intl";
import { useState } from "react";
import { Drawer } from "@mui/material";
import FilterList from "./FilterList";

const Filter: React.FC = () => {
  const [state, setState] = useState(false);
  const toggleFilter = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  return (
    <FilterWrapper>
      <FilterButton
        onClick={toggleFilter}
        startIcon={<Image priority src={FilterIcon} alt={""} />}
        variant="contained"
        disableElevation
      >
        <FormattedMessage
          id="layout.filters"
          defaultMessage={"layout.filters"}
        />
        <Drawer anchor={"right"} open={state} onClose={toggleFilter}>
          <FilterList toggleFilter={toggleFilter} />
        </Drawer>
      </FilterButton>
    </FilterWrapper>
  );
};

export default Filter;
