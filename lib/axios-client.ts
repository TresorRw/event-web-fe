import axios from "axios";
import { BackendAPI } from "./constants";
import axiosRetry from "axios-retry";

export const AxiosClient = axios.create({
  baseURL: `${BackendAPI}/api`,
});

axiosRetry(AxiosClient, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: axiosRetry.isNetworkOrIdempotentRequestError,
});
