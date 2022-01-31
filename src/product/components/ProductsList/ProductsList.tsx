import React from "react";
import {Divider, Stack} from "@chakra-ui/react";

import {Product} from "~/product/types";

import {Filter} from "./types";
import Count from "./Count";
import Filters from "./Filters";

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({products}) => {
  const [filter, setFilter] = React.useState<Filter>(Filter.MostRecent);

  return (
    <Stack alignItems="flex-start" spacing={6}>
      <Stack
        alignItems="center"
        as="nav"
        direction="row"
        divider={<Divider borderColor="gray.300" height={12} orientation="vertical" />}
        flex={1}
        spacing={6}
        width="100%"
      >
        <Count current={products.length} total={products.length} />
        <Filters active={filter} onChange={setFilter} />
      </Stack>
      <span>acá va la grilla</span>
      <Count current={products.length} total={products.length} />
    </Stack>
  );
};

export default ProductsList;
