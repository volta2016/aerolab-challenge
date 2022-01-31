import React from "react";
import {Text} from "@chakra-ui/react";

interface Props {
  current: number;
  total: number;
}

const Count: React.FC<Props> = ({current, total}) => {
  return (
    <Text color="gray.500" fontWeight="bold">
      {current} of {total}
    </Text>
  );
};

export default Count;
