// import { useEffect } from "react";
import { cartState } from "../stores/cart/atom";
import { useRecoilState } from "recoil";

function useCart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);

  function onAdd(chosenProduct) {
    const exist = cartItems.find((item) => item.id === chosenProduct.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === chosenProduct.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...chosenProduct, qty: 1 }]);
    }
  }

  function onRemove() {
    console.log("remove");
  }

  return { onAdd, onRemove };
}

export default useCart;
