import React from "react";
import {Box, Stack, Text} from "@chakra-ui/react";

import {Filter} from "./types";

interface Props {
  active: Filter;
  onChange: (filter: Filter) => void;
}

const FILTERS: Filter[] = [Filter.MostRecent, Filter.LowestPrice, Filter.HighetsPrice];

const Filters: React.FC<Props> = ({onChange, active}) => {
  return (
    <Stack alingItems="center" direction="row" spacing={6}>
      <Text color="grey.500">Sort by:</Text>
      <Stack direction="row" spacing={4}>
        {FILTERS.map((filter) => (
          <Box
            key={filter}
            backgroundColor={filter === active ? "primary.400" : "grey.100"}
            borderRadius={9999}
            color={filter === active ? "white" : "grey.600"}
            cursor="pointer"
            fontWeight="500"
            padding={2}
            paddingX={6}
            onClick={() => onChange(filter)}
          >
            {filter}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filters;
