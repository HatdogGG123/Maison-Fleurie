import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import Button from "../ui/Button";
import FullWidthLayout from "../layout/FullWidthLayout";
import { flowers, getDiscountedPrice } from "../../data/productList";
import { useFavorites } from "../../context/FavoritesContext";

const FavoriteList = ({ onToggle }) => {
  const { favorites, toggleFavorite } = useFavorites();

  const favoriteFlowers = favorites
    .map((id) => flowers.find((flower) => flower.id === id))
    .filter(Boolean);

  return (
    <FullWidthLayout additionalStyle="fixed top-0 left-0 z-100 bg-black/40 flex justify-end">
      <section className="flex flex-col w-[90%] h-full bg-white p-3 md:w-1/2 lg:w-1/4">
        <div className="flex items-center justify-between w-full h-fit">
          <p className="w-fit h-fit font-body text-lg">My Favorites</p>
          <Button
            leadingIcon={<X strokeWidth={1} className="size-5" />}
            onClick={onToggle}
            additionalStyle="w-fit h-fit aspect-square p-2 bg-gray"
          />
        </div>

        <section className="flex flex-col flex-1 overflow-y-auto mt-3">
          {favoriteFlowers.length === 0 ? (
            <p className="text-black/40 font-body text-center">
              Currently no items in here...
            </p>
          ) : (
            favoriteFlowers.map((flower) => {
              const isDiscounted = flower.discount > 0;
              const finalPrice = getDiscountedPrice(
                flower.price,
                flower.discount,
              );

              return (
                <div
                  key={flower.id}
                  className="flex items-center gap-3 py-3 border-b border-black/10 font-body"
                >
                  <Link
                    to={`/productDetail/${flower.id}`}
                    onClick={onToggle}
                    className="flex items-center gap-3 flex-1 min-w-0"
                  >
                    <img
                      loading="lazy"
                      src={flower.imageUrl}
                      alt={flower.name}
                      className="object-cover w-20 aspect-square"
                    />
                    <div className="flex flex-col min-w-0">
                      <p className="text-black/80 truncate">{flower.name}</p>
                      <div className="flex gap-2 items-center">
                        <p className="font-medium">${finalPrice.toFixed(2)}</p>
                        {isDiscounted ? (
                          <p className="line-through text-black/50 text-sm">
                            ${flower.price.toFixed(2)}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </Link>

                  <Button
                    leadingIcon={<X strokeWidth={1} className="size-5" />}
                    onClick={() => toggleFavorite(flower.id)}
                    additionalStyle="w-fit h-fit aspect-square p-2"
                  />
                </div>
              );
            })
          )}
        </section>
      </section>
    </FullWidthLayout>
  );
};

export default FavoriteList;
