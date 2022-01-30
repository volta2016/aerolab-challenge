import React, {useState} from "react";
import {CircularProgress, Center} from "@chakra-ui/react";

import {User} from "./types";
import api from "./api";

interface Context {
  state: {
    user: User;
  };
  actions: {
    addPoints: (amaunt: number) => Promise<void>;
  };
}

const UserContext = React.createContext({} as Context);

const UserProvider: React.FC = ({children}) => {
  const [user, setUser] = React.useState<User>();
  const [status, setStatus] = React.useState<"pending" | "resolve" | "rejected">("pending");

  async function handleAddPoints(amount: number) {
    // important before
    if (!user) return;

    return api.points.add(amount).then(() => setUser({...user, points: user.points + amount}));
  }

  if (!user || status === "pending") {
    return (
      <Center>
        <CircularProgress isIndeterminate color="primary.500" />
      </Center>
    );
  }
  // when our app does not yet have the data do not show me the content of the app, you have to block the rendering of the app by showing me a spinner.

  const state: Context["state"] = {
    user,
  };
  const actions = {
    addPoints: handleAddPoints,
  };

  return <UserContext.Provider value={{state, actions}}>{children}</UserContext.Provider>;
};

export {UserContext as default, UserProvider as Provider};
