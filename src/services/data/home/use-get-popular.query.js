import { useQuery } from "@tanstack/react-query";
import list from "../../../../content/food-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";

export const fetch = async () => {
  return list;
};

export default function useGetPopularQuery() {
  return useQuery({
    queryKey: [API_ENDPOINT.POPULAR],
    queryFn: fetch
  });
}