import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../stores/products/atom";
import axios from "axios";

export const useFetch = (url, ref, initialValue) => {
  const [products, setProducts] = useRecoilState(productsState);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref.current) {
      (async () => {
        try {
          const res = await axios(url);
          setProducts(res.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      ref.current = false;
    };
  }, [url, ref]);
  return { loading, products, error };
};

export default useFetch;
