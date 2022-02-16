import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BASE } from "../constants/urlBase";

export const useTripsListRequest = () => {
    const [tripsList, setTripsList] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const getTrips = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`${URL_BASE}/trips`);
          setTripsList(response.data.trips);
          setIsLoading(false);

        } catch (error) {
          console.log(error);
          setError(error);
          setIsLoading(false);
        };
    };

    useEffect(() => {
        getTrips();
    }, []);

    return [tripsList, isLoading, error];
};