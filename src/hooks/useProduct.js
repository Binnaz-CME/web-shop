import { useParams } from "react-router-dom";
import { productsState } from "../stores/products/atom";
import { useRecoilValue } from "recoil";

function useProduct() {
  function chosenProduct(productId) {
    const products = useRecoilValue(productsState);
    
    const foundProduct = products.find(
      (product) => product.id === parseInt(productId)
    );
    return foundProduct
  }
  return { chosenProduct };
}

export default useProduct;
