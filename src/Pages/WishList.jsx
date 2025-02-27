import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
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
      {wishlist && wishlist.length > 0 ? (
        <div className="p-5 grid md:grid-cols-2 lg:grid-cols-1 gap-5">
          {wishlist.map((list) => (
            <div
              key={list.id}
              className="border rounded-2xl sm:space-y-5 lg:space-y-0 lg:grid grid-cols-5 gap-10 items-center p-3"
            >
              <div className="col-span-2">
                <img
                  src={list.image}
                  className="rounded-lg md:h-48 md:w-[99%]"
                />
              </div>

              <div className="space-y-3 col-span-2">
                <h1 className="text-xl font-bold font-work text-[#282828]">
                  {list.estate_title}
                </h1>
                <p className="text-[#282828B2] text-sm">
                  <span className="text-base font-medium font-work text-[#282828]">
                    Space :
                  </span>
                  {list.area}
                </p>
                <p className="text-base font-work text-[#282828B2] text-poppins">
                  <span className="text-base font-medium font-work text-[#282828]">
                    Location :
                  </span>
                  {list.location}
                </p>
                <p className="text-base font-work text-[#282828B2] text-poppins">
                  <span className="text-base font-medium font-work text-[#282828]">
                    Price :
                  </span>
                  {list.price}
                </p>
                <p className="text-base font-work text-[#282828B2] text-poppins">
                  <span className="text-base font-medium font-work text-[#282828]">
                    Segment :
                  </span>
                  {list.segment_name}
                </p>
                <p className="text-base font-work text-[#282828B2] text-poppins">
                  <span className="text-base font-medium font-work text-[#282828]">
                    Status :
                  </span>
                  {list.status}
                </p>
              </div>

              <div className="col-span-1">
                <Link to={`/details/${list.id}`}>
                  <button className="btn btn-secondary">Buy Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className="text-3xl text-center text-red-600 my-32 font-work font-semibold">
            Sorry, Your Wishlist Is Empty !
          </h1>
        </div>
      )}
    </div>
  );
};

export default WishList;
