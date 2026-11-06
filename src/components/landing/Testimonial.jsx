import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClipWidthLayout from "../layout/ClipWidthLayout";
import Button from "../ui/Button";
import testimony1 from "../../assets/testimony-image-1.jpg";

const Testimonial = () => {
  const testimonyList = [
    {
      title: "Absolutely Beautiful Blooms!",
      testimony:
        "The bouquet was even more beautiful than I expected! The flowers were fresh, beautifully arranged, and wrapped with so much care. It made the perfect gift for someone special.",
      name: "Sofia M.",
      imageUrl: testimony1,
    },
  ];
  return (
    <ClipWidthLayout>
      {testimonyList.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          testimony={testimonial.testimony}
          title={testimonial.title}
          name={testimonial.name}
          imageUrl={testimonial.imageUrl}
        />
      ))}
    </ClipWidthLayout>
  );
};

function TestimonialCard({
  title = "",
  testimony = "",
  name = "",
  imageUrl = "",
}) {
  return (
    <section className="grid grid-cols-1 grid-rows-2 gap-5 sm:grid-cols-2 sm:grid-rows-1 h-full w-full">
      <section className="p-5 flex flex-col gap-5 justify-center 2xl:mt-20">
        <div className="flex flex-col gap-1">
          <p className="font-heading text-[clamp(1.5rem,10vw,4.5rem)] md:leading-22 font-medium">
            "{title}"
          </p>
          <p className="font-body text-[clamp(16px,2vw,2rem)] italic">
            {testimony}
          </p>
        </div>

        <p className="font-heading text-[clamp(20px,2vw,3rem)] self-end">
          - {name}
        </p>
      </section>

      <section className="w-full h-full flex items-center justify-center">
        <img src={imageUrl} alt="" className="h-[90%] object-cover" />
      </section>
    </section>
  );
}

export default Testimonial;
