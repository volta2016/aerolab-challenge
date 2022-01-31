import React from "react";
import {Flex, CircularProgress, Heading, Stack} from "@chakra-ui/react";

import {Product} from "~/product/types";
import api from "~/product/api";
import header from "~/assets/header.png";
import ProductsList from "~/product/components/ProductsList";

const Home: React.FC = () => {
  const [products, setProduct] = React.useState<Product[]>([]);
  const [status, setStatus] = React.useState<"pending" | "resolved" | "rejected">("pending");

  React.useEffect(() => {
    api.list().then((products) => {
      setProduct(products);
      setStatus("resolved");
    });
  }, []);

  if (status === "pending") {
    return (
      <Flex alignItems="center" justifyContent="center" paddingY={12}>
        <CircularProgress isIndeterminate color="primary.500" />
      </Flex>
    );
  }

  return (
    <Stack flex={1} spacing={6}>
      <Flex
        alignItems="flex-end"
        backgroundImage={`url(${header})`}
        backgroundSize="cover"
        borderRadius="md"
        justifyContent="flex-start"
        minHeight={64}
        padding={6}
      >
        <Heading color="white" fontSize="4xl">
          Electronics
        </Heading>
      </Flex>
      <ProductsList products={products} />
    </Stack>
  );
};

export default Home;
