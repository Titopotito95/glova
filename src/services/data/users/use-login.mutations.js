import React from "react";
import { useMutation } from "@tanstack/react-query";
import user from "../../repositories/user";

export default function useLoginMutations() {
  return useMutation(({ variables }) => {
    // mocked user api call here
    // user.login(variables);
    return new Promise.resolve();
  });
}
