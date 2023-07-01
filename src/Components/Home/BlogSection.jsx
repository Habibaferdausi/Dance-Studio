import React from "react";
import { motion } from "framer-motion";
import Wave from "react-wavify";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Benefits of Dance for Physical Health",
      date: "July 1, 2023",
      content:
        "Dance is not only a form of self-expression but also a fantastic way to improve physical health. Regular dancing can enhance cardiovascular fitness, improve muscle strength and endurance, and boost flexibility. Additionally, it helps with weight management and can be a fun alternative to traditional exercise routines. Consider incorporating dance into your fitness regimen to enjoy these benefits!",
      image:
        "https://images.pexels.com/photos/11483436/pexels-photo-11483436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "John Doe",
      comment: "Great article! Dancing has truly transformed my life.",
      color: "bg-blue-100 dark:bg-gray-800",
    },
    {
      title: "Exploring Different Dance Styles",
      date: "June 25, 2023",
      content:
        "Dance is a diverse art form with various styles to explore. From classical ballet to hip-hop, contemporary to Latin dances, each style offers its unique movements and cultural significance. Take the opportunity to learn about different dance styles, try them out, and discover the ones that resonate with you the most. Embracing different dance forms can broaden your horizons and enrich your dancing journey.",
      image:
        "https://images.pexels.com/photos/209948/pexels-photo-209948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Jane Smith",
      comment:
        "I never knew there were so many dance styles to explore. Thanks for sharing!",
      color: "bg-purple-100 dark:bg-gray-800",
    },
    {
      title: "The Role of Dance in Mental Well-being",
      date: "July 10, 2023",
      content:
        "In addition to its physical benefits, dance also plays a significant role in promoting mental well-being. Dancing can alleviate stress, boost mood, and enhance overall mental health. It provides an outlet for self-expression and creativity, allowing individuals to release emotions and connect with themselves and others. Whether it’s in a dance class or simply dancing alone in your room, don’t underestimate the positive impact dance can have on your mental well-being.",
      image:
        "https://images.pexels.com/photos/7520745/pexels-photo-7520745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Sarah Johnson",
      comment:
        "I completely agree! Dancing has been a lifesaver for my mental health.",
      color: "bg-pink-100 dark:bg-gray-800",
    },
    {
      title: "The Evolution of Dance Throughout History",
      date: "July 18, 2023",
      content:
        "Dance has evolved significantly throughout history, reflecting the cultural, social, and artistic changes of each era. From ancient ritualistic dances to the emergence of ballet, the rise of jazz and swing in the early 20th century, and the birth of hip-hop in urban communities, dance continues to evolve and adapt to the times. Exploring the history of dance can deepen your appreciation for this art form and provide insights into its cultural significance.",
      image:
        "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      author: "Michael Thompson",
      comment: "Fascinating read! I love learning about the history of dance.",
      color: "bg-green-100 dark:bg-gray-800",
    },
  ];

  return (
    <section className="py-12 ">
      <Wave mask="url(#mask)" fill="#fc94af">
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset="0.5" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>

      <h1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        style={{ fontFamily: "Lemon, sans-serif" }}
        className="bg-gradient-to-r text-2xl text-center lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
      >
        <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
          Blogs
        </span>
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg shadow-md overflow-hidden ${post.color}`}
            >
              <div className="relative">
                <img
                  src={post.image}
                  alt="Blog post"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-sm font-medium">{post.author}</p>
                  <p className="text-xs">{post.comment}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl text-blue-600 dark:text-blue-100 font-semibold mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                    {post.date}
                  </span>
                </p>
                <p className="text-gray-600">{post.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
