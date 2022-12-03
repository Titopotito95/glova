import React from "react";
import { useQuery } from "react-query";
import foodlist from "../../../../content/food-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";
export const fetch = async () => {
  return foodlist;
};

export default function useGetNearUserQuery() {
  return useQuery([API_ENDPOINT.NEAR_USER], () => fetch());
}
