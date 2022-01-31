Este componente ProductsList va recibir el listado de productos
va a saber:

- Como mostrarlo 
- como mostrar las tarjetas.
- Cuando un usuario puede comprar un producto o no


El componente ProductsList va tener un monton de responsabilidades por dentro y para
no tener que manejar esas responsabilidades por fuera, para no tener muchos estados globales

Por props vamos a recibir products > que va ser un array de products y vamos hacer varias cosas acá

```tsx
import React from "react";

interface Props {
  products: Product[]
}

const ProductsList: React.FC<Props> = () => {
  return <div>{`<ProductsList />`}</div>;
};

export default ProductsList;
```

- Vamos a tener que manejar los filtros 
- Vamos a tener que filtrar, ordenar los elementos en base a los filtros

```tsx
const [filter, setFilter] = React.useState<type>(filter.MostRecent)
```

que es este filter.MostRecent va ser un enum
- enum nos permite definir una serie de posibilidades

```jsx
export enum Filter {
  MostRecent = "Most recent",
  lowestPrice = "lowest price",
  HighetsPrice = "Highets price",
}
```

entonces esto acá va ser de tipo filter

```tsx
import React from "react";
import {Divider, Stack} from "@chakra-ui/react";

import {Product} from "~/product/types";

import {Filter} from "./types";

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
    </Stack>
  );
};

export default ProductsList;
```

ahora en ProductList tengo que definir los componentes que nos faltan que son **Count y Filters** 

```tsx
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
  const filteredProducts = React.useMemo(() => {}, [filter, products])

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
```

ahora vamos a usar **useMemo** solo se va ejecutar cuando la dependencias cambien