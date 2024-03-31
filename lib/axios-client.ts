import axios from "axios"
import { BackendAPI } from "./constants"
import axiosRetry from "axios-retry";

const AxiosCleint = axios.create({
  baseURL: `${BackendAPI}/api`,
});

axiosRetry(AxiosCleint, { retries: 3, retryDelay: axiosRetry.exponentialDelay, retryCondition: axiosRetry.isNetworkOrIdempotentRequestError });

export default AxiosCleint