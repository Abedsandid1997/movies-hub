import axios, { type AxiosRequestConfig } from "axios";

export interface fetchResponse<T> {
  id?: number;
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

class APIClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<fetchResponse<T>>(this.endPoint, config)
      .then((res) => res.data);

  getAllGenres = () =>
    axiosInstance.get<T>(this.endPoint).then((res) => res.data);

  getMediaDetail = () =>
    axiosInstance.get<T>(this.endPoint).then((res) => res.data);
}

export default APIClient;
