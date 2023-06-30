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
    img: "https://pa1.narvii.com/6640/6f13ae392a1973a7186beb0ad1eaf9d1287c1567_00.gif",
  },
  {
    title: "Wide Range of Dance Styles",
    description:
      "We offer a diverse selection of dance styles, including ballet, hip-hop, contemporary, salsa, and more. There's something for everyone!",
    img: "https://64.media.tumblr.com/b4d49b99fd63dec2671f2bfee29a0ef3/tumblr_nyh8h8GPby1sqs053o1_500.gif",
  },
  {
    title: "State-of-the-Art Facilities",
    description:
      "Our dance studio is equipped with state-of-the-art facilities, spacious dance floors, and top-quality sound systems to enhance your learning experience.",
    img: "https://i.makeagif.com/media/4-22-2017/j1Lvi9.gif",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 mt-10 lg:mt-20 mb-10 py-12 dark:bg-gray-700">
      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
      >
        Why Choose Us
      </h1>
      <div
        className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 mx-10 h-60 dark:bg-gray-800"
        data-aos="fade-left"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        {features.map((feature, index) => (
          <div className="bg-gray-100  dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <div className=" items-center mb-4">
              <img src={feature.img} className="h-40 w-full" />
              <h3 className="text-xl mt-5 text-center text-purple-500 dark:text-white font-semibold">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
