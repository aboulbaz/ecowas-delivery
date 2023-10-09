import {
  FilterCrossButton,
  FilterListHeader,
  FilterListTitle,
} from "./Header.style";
import { FormattedMessage } from "react-intl";
import { Box, Divider, List } from "@mui/material";
import FilterListDispatcher from "./FilterListDispatcher";

type FilterListProps = {
  toggleFilter: (event: React.KeyboardEvent | React.MouseEvent) => void;
};

const FilterList: React.FC<FilterListProps> = ({ toggleFilter }) => {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <FilterListHeader>
        <FilterListTitle>
          <FormattedMessage
            id="layout.filters"
            defaultMessage={"layout.filters"}
          />
        </FilterListTitle>
        <FilterCrossButton
          onClick={toggleFilter}
          variant="contained"
          disableElevation
        >
          X
        </FilterCrossButton>
      </FilterListHeader>
      <Divider />
      <List>
        <FilterListDispatcher />
      </List>
    </Box>
  );
};

export default FilterList;
