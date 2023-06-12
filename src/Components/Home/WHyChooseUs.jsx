import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faPalette,
  faHeadphones,
} from "@fortawesome/free-solid-svg-icons";
import { Fade } from "react-awesome-reveal";

const features = [
  {
    title: "Experienced Instructors",
    description:
      "Our dance studio is home to highly experienced and passionate dance instructors who will guide you through your dance journey.",
    icon: faUsers,
  },
  {
    title: "Wide Range of Dance Styles",
    description:
      "We offer a diverse selection of dance styles, including ballet, hip-hop, contemporary, salsa, and more. There's something for everyone!",
    icon: faPalette,
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our dance studio is equipped with state-of-the-art facilities, spacious dance floors, and top-quality sound systems to enhance your learning experience.",
    icon: faHeadphones,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12 dark:bg-gray-700">
      <div className="container mx-auto px-4 text-purple-600">
        <h2 className="text-3xl  dark:text-white text-purple-700 font-bold text-center mb-8">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 dark:bg-gray-800">
          {features.map((feature, index) => (
            <Fade direction="up" key={index} delay={index * 100}>
              <div className="bg-gray-100  dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={feature.icon}
                    className="text-green-500 dark:text-green-200 mr-2 text-3xl"
                  />
                  <h3 className="text-xl text-purple-500 dark:text-white font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-white">
                  {feature.description}
                </p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
