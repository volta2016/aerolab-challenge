import React from "react";
import {Flex, CircularProgress} from "@chakra-ui/react";

import {Product} from "~/product/types";
import api from "~/product/api";

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
    <div>
      <p>{`<HomeScreen />`}</p>
    </div>
  );
};

export default Home;
