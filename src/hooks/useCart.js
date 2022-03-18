import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../stores/cart/atom";
import { selectState } from "../stores/select/atom";

function useCart() {
  const [cartItems, setCartItems] = useRecoilState(cartState);
  const selectValue = useRecoilValue(selectState);

  function onAdd(chosenProduct) {
    const exist = cartItems.find((item) => item.id === chosenProduct.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === chosenProduct.id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...chosenProduct, qty: selectValue }]);
    }
  }

  function onRemove(chosenProduct) {
    const exist = cartItems.find((item) => item.id === chosenProduct.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== chosenProduct.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === chosenProduct.id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  }

  function saveCart() {
    const savedCart = JSON.stringify(cartItems);
    localStorage.setItem("savedCart", savedCart);
  }

  function loadSavedCart() {
    const loadCart = JSON.parse(localStorage.getItem("savedCart"));
      setCartItems(loadCart);
  }

  useEffect(() => {
    if (cartItems.length !== 0) {
      saveCart();
    }
  }, [onAdd, onRemove]);
  
  return { onAdd, onRemove, saveCart, loadSavedCart };
}

export default useCart;
