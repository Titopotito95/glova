import { useQuery } from "@tanstack/react-query";
import foodlist from "../../../../content/food-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";

export const fetch = async () => {
  return foodlist;
};

export default function useGetNearUserQuery() {
  return useQuery({
    queryKey: [API_ENDPOINT.NEAR_USER],
    queryFn: fetch
  });
}