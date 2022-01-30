import React from "react";

import UserContext, {Context} from "./context";
// UserContext and type context

export function usePoints(): [Context["state"]["user"]["points"], Context["actions"]["addPoints"]] {
  const {
    state: {user},
    actions: {addPoints},
  } = React.useContext(UserContext);

  return [user.points, addPoints];
}

export function useUser(): Context["state"]["user"] {
  const {
    state: {user},
  } = React.useContext(UserContext);

  return user;
}
