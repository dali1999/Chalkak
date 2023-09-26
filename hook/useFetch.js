import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import axios from "axios";
// const dotenv = require("dotenv");

export default function useFetch() {
  // dotenv.config();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://29c3-175-117-199-226.ngrok-free.app/api/users/`
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}
