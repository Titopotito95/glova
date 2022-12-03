import React from "react";
import { useQuery } from "react-query";
import categoryList from "../../../../content/category-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";
export const fetch = async () => {
  return categoryList;
};

export default function useGetPopularQuery() {
  return useQuery([API_ENDPOINT.POPULAR], () => fetch());
}
