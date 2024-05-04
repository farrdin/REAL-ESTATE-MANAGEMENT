import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getBuyLaterItem } from "../Utilities/LocalStorage";

const WishList = () => {
  const wishList = useLoaderData();
  const [wishlist, setWishlist] = useState();
  useEffect(() => {
    const savedWishlist = getBuyLaterItem();
    if (wishList.length > 0) {
      const wishedList = wishList.filter((list) =>
        savedWishlist.includes(list.id)
      );
      setWishlist(wishedList);
    }
  }, [wishList]);

  return (
    <div>
      <Helmet>
        <title>EstateVista | Wishlist</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-5 my-5">
        {wishlist &&
          wishlist.map((list) => (
            <div key={list.id}>
              <img
                src={list.image}
                className="rounded-lg h-[240px] w-full"
                alt=""
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default WishList;
