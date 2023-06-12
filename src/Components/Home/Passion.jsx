import React from "react";
import { useTrail, animated } from "react-spring";

const Passion = () => {
  const items = [
    {
      title: "Passionate Instructors",
      description:
        "Our dance studio is led by passionate and experienced instructors who are dedicated to helping you achieve your dance goals.",
      icon: "M12 6v6m0 0v6m0-6h6m-6 0H6",
    },
    {
      title: "Creative Expression",
      description:
        "At our studio, we believe in the power of dance as a form of creative expression. Discover your unique dance style and let your creativity shine.",
      icon: "M10 20l4-16m4 4l4 4-4 4",
    },
    {
      title: "Inclusive Community",
      description:
        "We foster an inclusive and supportive community where dancers of all ages and skill levels can come together to learn, grow, and inspire each other.",
      icon: "M19 9l-7 7-7-7",
    },
  ];

  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 200,
  });

  return (
    <section className="bg-gradient-to-r from-purple-900 to-purple-700 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          Welcome to Our Dance Studio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trail.map((styles, index) => (
            <animated.div
              key={index}
              style={styles}
              className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mb-4 text-purple-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={items[index].icon}
                />
              </svg>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white text-center">
                {items[index].title}
              </h3>
              <p className="dark:text-gray-200 text-gray-700 text-center">
                {items[index].description}
              </p>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Passion;
