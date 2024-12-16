"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const cuisineContent = [
  {
    imageUrl: "/assets/images/cuisine-carousel/pau_bbt.png",
    cuisineName: "Bubble Tea",
  },
  {
    imageUrl: "/assets/images/cuisine-carousel/pau_hawker.png",
    cuisineName: "Hawker",
  },
  {
    imageUrl: "/assets/images/cuisine-carousel/pau_sandwich.png",
    cuisineName: "Sandwiches",
  },
  {
    imageUrl: "/assets/images/cuisine-carousel/pau_coffee.png",
    cuisineName: "Coffee",
  },
  {
    imageUrl: "/assets/images/cuisine-carousel/pau_pizza.png",
    cuisineName: "Pizza",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 464 },
    items: 4,
  },
};

const CuisineCarousel = () => {
  return (
    <div className="items-center h-full w-full">
      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        ssr // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
        containerClass="cuisine-carousel-container"
        itemClass="cuisine-carousel-item-padding-12-px"
      >
        {cuisineContent.map((item, index) => (
          <div
            key={index}
            className="text-center bg-gray-100 p-4 rounded-lg shadow-md"
          >
            <img
              src={item.imageUrl}
              alt={`image-of-paupau-${item.cuisineName}`}
              className="mx-auto max-h-30 rounded-lg"
            />
            <p className="mt-2 font-semibold">{item.cuisineName}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CuisineCarousel;
