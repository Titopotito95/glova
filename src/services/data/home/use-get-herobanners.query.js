import { useQuery } from "@tanstack/react-query";
import heroList from "../../../../content/hero-banner-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";

export const fetchBanners = async () => {
  return heroList;
};

export default function useGetHerobannersQuery() {
  return useQuery({
    queryKey: [API_ENDPOINT.HERO_BANNERLIST],
    queryFn: fetchBanners
  });
}