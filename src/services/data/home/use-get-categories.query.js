import { useQuery } from "@tanstack/react-query";
import categoryList from "../../../../content/category-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";
export const fetch = async () => {
  return categoryList;
};

export default function useGetCategoryQuery() {
  return useQuery([API_ENDPOINT.CATEGORIES], () => fetch());
}
