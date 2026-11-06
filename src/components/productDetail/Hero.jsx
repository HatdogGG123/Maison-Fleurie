import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useCheckout } from "../../context/CheckoutContext";
import {
  Truck,
  Lock,
  WalletMinimal,
  Phone,
  Heart,
  ChevronLeft,
} from "lucide-react";
import { flowers, getDiscountedPrice } from "../../data/productList";
import ClipWidthLayout from "../layout/ClipWidthLayout";
import Button from "../../components/ui/Button";

const Hero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { startCheckout } = useCheckout();

  const flower = flowers.find((item) => item.id === Number(id));
  let isDiscounted = flower.discount > 0;

  const handleBuyNow = () => {
    startCheckout(flower.id);
    navigate("/productCheckout");
  };

  if (!flower) {
    return <p>Flower not found.</p>;
  }

  const benefitsList = [
    {
      id: 1,
      icon: <Truck strokeWidth={1} />,
      title: "Free Delivery",
      description:
        "Enjoy free delivery straight to your doorstep, bringing beautiful blooms right to you.",
    },
    {
      id: 2,
      icon: <Lock strokeWidth={1} />,
      title: "Secure Payments",
      description:
        "Shop with confidence through safe and secure payment transactions.",
    },
    {
      id: 3,
      icon: <WalletMinimal strokeWidth={1} />,
      title: "Money Back Guarantee",
      description:
        "Not delighted with your order? Let us know and we will make it right with a refund.",
    },
    {
      id: 4,
      icon: <Phone strokeWidth={1} />,
      title: "24/7 Customer Support",
      description:
        "Our team is always ready to answer your questions, day or night, before and after you order.",
    },
  ];

  return (
    <ClipWidthLayout additionalStyle="grid grid-cols-1 md:grid-rows-1 md:grid-cols-2 h-fit">
      <section className="h-[50dvh] md:h-dvh">
        <img
          src={flower.imageUrl}
          alt={flower.name}
          className="h-[50dvh] w-full object-cover md:h-dvh"
        />
      </section>

      <section className="p-5 flex flex-col gap-3 font-body">
        <Link to={"/flowers"} className="mb-5 flex items-center gap-0.5">
          <ChevronLeft strokeWidth={1} className="size-5" />
          <p>Return to Flower Catalog</p>
        </Link>

        {isDiscounted && (
          <section className="font-heading font-medium bg-tertiary w-fit px-3 py-1 text-white">
            {flower.discount}% Off
          </section>
        )}
        <section className="flex flex-col mb-5">
          <p className="font-heading text-[2rem] font-medium">{flower.name}</p>
          <p className="text-black/80">{flower.description}</p>
        </section>

        <section className="flex items-center gap-2 w-full h-fit">
          <p className="text-[2.5rem] md:text-[3rem]">
            $
            {isDiscounted
              ? getDiscountedPrice(flower.price, flower.discount).toFixed(2)
              : flower.price}
          </p>

          {isDiscounted ? (
            <p className="text-lg text-black/50 line-through">
              {flower.price.toFixed(2)}
            </p>
          ) : null}
        </section>

        <section className="flex gap-2 w-full bg-secondary p-2 items-center justify-center">
          <Button
            additionalStyle={"w-full text-white"}
            text={"Buy Now"}
            onClick={handleBuyNow}
          />
        </section>

        <section className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-2">
          {benefitsList.map((benefit) => {
            return (
              <BenefitCard
                key={benefit.id}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            );
          })}
        </section>
      </section>
    </ClipWidthLayout>
  );
};

const BenefitCard = ({ icon, title, description }) => {
  return (
    <section>
      <section className="bg-tertiary w-fit aspect-square p-2 text-white">
        {icon}
      </section>

      <p className="font-heading text-[1.5rem] font-semibold">{title}</p>
      <p>{description}</p>
    </section>
  );
};

export default Hero;
