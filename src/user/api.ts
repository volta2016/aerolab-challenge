// is in charge of fetching from our API in this case it will mocke what has to be returned by the external service

import {User} from "./types";

export default {
  fetch: (): Promise<User> =>
    Promise.resolve({
      id: "5a03638052fd231590d04eb5",
      name: "John Kite",
      points: 2000,
      redeemHistory: [],
      createDate: "new Date(1510171520852)",
    }),
  points: {
    add: (amount: number): Promise<number> => Promise.resolve(amount),
  },
};
