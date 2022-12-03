import React from "react";
import { useQuery } from "react-query";
import foodlist from "../../../../content/hero-banner-list.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";
export const fetchBanners = async () => {
  return foodlist;
};

export default function useGetHerobannersQuery() {
  return useQuery([API_ENDPOINT.HERO_BANNERLIST], () => fetchBanners());
}
