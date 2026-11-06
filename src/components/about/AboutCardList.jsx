import React from "react";
import aboutImage1 from "../../assets/about-image-1.jpg";
import aboutImage2 from "../../assets/about-image-2.jpg";
import aboutImage3 from "../../assets/about-image-3.jpg";
import aboutImage4 from "../../assets/about-image-4.jpg";
import AboutCard from "./AboutCard";

const AboutCardList = () => {
  const cardList = [
    {
      altText: "Maison Fleurie Owner",
      imageUrl: aboutImage1,
      text: "The story of Fleur & Grâce began with a founder who saw flowers as more than just beautiful gifts. To them, flowers were a way to express love, preserve memories, and bring comfort during life's most meaningful moments. Inspired by the charm of French gardens and the art of floral arrangement, the dream of creating a flower shop built on elegance, creativity, and heartfelt service slowly took shape. With a passion for design and a desire to make every customer feel special, Fleur & Grâce was founded to turn this vision into reality. What began as a simple dream grew into a floral destination where each arrangement is thoughtfully created and every detail matters. Today, that same passion continues to guide the shop, reminding us that even the smallest bloom can carry a beautiful story.",
      isReversed: false,
    },
    {
      altText: "Maison Fleurie Shop",
      imageUrl: aboutImage2,
      text: "The Fleur & Grâce began with a simple dream: to bring beauty, joy, and heartfelt emotions into people's lives through flowers. Inspired by the timeless elegance of French floral design, we created a flower shop where every bouquet tells a story and every bloom carries a special meaning.What started as a small passion for flowers grew into a team dedicated to making life's special moments more memorable. From birthdays and anniversaries to weddings, corporate events, and moments of sympathy, we believe flowers have a beautiful way of expressing what words sometimes cannot.",
      isReversed: true,
    },
    {
      altText: "Maison Fleurie Staffs",
      imageUrl: aboutImage3,
      text: "Behind every arrangement is our team of passionate florists and dedicated staff. With creativity, care, and attention to detail, they carefully select fresh blooms, combine complementary colors, and craft arrangements that reflect each customer's vision. Whether helping you choose the perfect bouquet or preparing flowers for a meaningful celebration, our team strives to make every experience personal and memorable.",
      isReversed: false,
    },
    {
      altText: "Maison Fleurie Staffs",
      imageUrl: aboutImage4,
      text: "At Fleur & Grâce, we offer a variety of floral arrangements to suit different occasions and preferences. Our collection includes classic roses, elegant mixed bouquets, hand-tied arrangements, single-stem flowers, and signature designs inspired by the charm of French gardens. We also create floral arrangements for birthdays, romantic gestures, weddings, celebrations, and sympathy occasions. Every flower has its own beauty, and every occasion deserves something special. Our goal is to bring these elements together in arrangements that feel thoughtful, graceful, and meaningful.",
      isReversed: true,
    },
  ];
  return (
    <section className="flex flex-col">
      {cardList.map((card, index) => {
        if (card.imageUrl) {
          return (
            <AboutCard
              key={index}
              isReversed={card.isReversed}
              altText={card.altText}
              imageUrl={card.imageUrl}
              text={card.text}
            />
          );
        }
      })}
    </section>
  );
};

export default AboutCardList;
