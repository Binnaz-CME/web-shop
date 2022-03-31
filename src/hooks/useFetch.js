import { useState, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { productsState } from "../stores/products/atom";
import { authState } from "../stores/auth/atom";
import axios from "axios";

function useFetch(url) {
  const [products, setProducts] = useRecoilState(productsState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchProducts() {
    try {
      const res = await axios.get(url);
      setProducts(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchData(body) {
    try {
      const response = await axios(body);
      const { data } = response;
      return data
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }
  return { loading, products, error, fetchData };
}

export default useFetch;
