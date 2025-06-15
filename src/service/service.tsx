import { url, type params } from "../url/url"
import axios from 'axios';

export const getAllCategories = async() => {
  return axios.get(url.getAllCategories);
}

export const getAllProducts = async(params:params) => {
  return axios.get(url.getAllProducts(params));
}

export const getTopSellers = () => {
  return axios.get(url.getTopSeller);
};