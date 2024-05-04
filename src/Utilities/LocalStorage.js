import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getBuyLaterItem = () => {
  const savedBuyLaterItem = localStorage.getItem("buyLater");
  return savedBuyLaterItem ? JSON.parse(savedBuyLaterItem) : [];
};

const buyLater = (id) => {
  const buyLaterItem = getBuyLaterItem();

  if (buyLaterItem.includes(id)) {
    toast.error("You have already added this Property to the wishlist.");
  } else {
    const updatedBuyLaterItem = [...buyLaterItem, id];
    localStorage.setItem("buyLater", JSON.stringify(updatedBuyLaterItem));
    toast("Property added to Wishlist.");
  }
};
export { buyLater, getBuyLaterItem };
