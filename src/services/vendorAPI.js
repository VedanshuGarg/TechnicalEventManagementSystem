import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const addItem = (data) => API.post("/vendor/add-item", data);
export const getItems = () => API.get("/vendor/items");
export const deleteItem = (id) => API.delete(`/vendor/item/${id}`);
export const getTransactions = () => API.get("/vendor/transactions");
