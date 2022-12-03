import React from "react";
import { useQuery } from "react-query";
import picture from "../../../../content/picture-data.json";
import { API_ENDPOINT } from "../../../utils/api/endpoints";
export const fetch = async () => {
  return picture;
};

export default function useGetDayPicture() {
  return useQuery([API_ENDPOINT.DAY_PICTURE], () => fetch());
}
