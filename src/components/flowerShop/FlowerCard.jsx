import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { getDiscountedPrice } from "../../data/productList";
import Button from "../../components/ui/Button";
import { useFavorites } from "../../context/FavoritesContext";

const FlowerCard = ({ id, name, price, discount, imageUrl }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

  let isDiscounted = discount > 0;
  let discountPrice = getDiscountedPrice(price, discount);
  let isFavorited = isFavorite(id);

  function addToFavorite(e, flowerId) {
    e.preventDefault();
    toggleFavorite(flowerId);
  }

  return (
    <Link to={`/productDetail/${id}`}>
      <section className="w-full aspect-9/12 flex flex-col gap-2 font-body mb-20">
        <div className="h-full relative">
          <img
            loading="lazy"
            src={imageUrl}
            alt={name}
            className="object-cover w-full h-full"
          />
          <div className="absolute z-10 h-full w-full top-0 p-3 flex items-start justify-between">
            {isDiscounted ? (
              <p className="bg-tertiary w-fit px-3 py-1 text-white">
                - {discount}%
              </p>
            ) : (
              <p></p>
            )}

            <Button
              additionalStyle="bg-primary aspect-square p-2 relative z-20"
              leadingIcon={
                <Heart
                  strokeWidth={1}
                  className={`size-6 text-white ${isFavorited ? "fill-white" : ""}`}
                />
              }
              onClick={(e) => {
                addToFavorite(e, id);
              }}
            />
          </div>
        </div>

        <p className="text-black/80 text-lg">{name}</p>
        <div className="flex gap-2 items-center">
          <p className="text-xl font-medium">
            ${isDiscounted ? discountPrice.toFixed(2) : price.toFixed(2)}
          </p>
          {isDiscounted ? (
            <p className="line-through text-black/50">${price.toFixed(2)}</p>
          ) : null}
        </div>
      </section>
    </Link>
  );
};

export default FlowerCard;
