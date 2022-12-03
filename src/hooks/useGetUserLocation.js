import React, { useCallback, useEffect, useState } from "react";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentAddress,
  setRecentLocation,
} from "../app/reducers/usersReducer";
import lodash from "lodash";

export default function useGetUserLocation() {
  const { currentLocation, currentAddress } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  // ASK USER FOR LOCATION
  useEffect(() => {
    handleGetCurrentLocation();
  }, []);

  const handleGetCurrentLocation = () => {
    try {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        let location = await Location.getCurrentPositionAsync({}).catch(
          (err) => {
            console.log(err);
          }
        );
        if (location) {
          dispatch(setRecentLocation(location));
        }
      })();
    } catch (error) {
      console.log(error);
    }
  };

  // get user's current address
  useEffect(() => {
    if (!lodash.isEmpty(currentLocation)) {
      let position = {
        lat: currentLocation?.coords?.latitude,
        lng: currentLocation?.coords?.longitude,
      };
      getAddress(position);
    }
  }, [currentLocation]);

  const getAddress = useCallback(
    (position) => {
      handleGetAddress(position);
    },
    [currentLocation]
  );

  const handleGetAddress = async (position) => {
    try {
      let response = await Location.reverseGeocodeAsync({
        latitude: position?.lat,
        longitude: position?.lng,
      });

      let location = response[0];

      let address = `${location.name}`;
      dispatch(setCurrentAddress(address));
    } catch (error) {
      console.log(error);
    }
  };

  return { currentAddress, refreshLocation: handleGetCurrentLocation };
}
