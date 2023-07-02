import React from "react";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Summer Dance Workshop",
      date: "July 15, 2023",
      description:
        "Join us for an exciting week of dance workshops, featuring various dance styles and world-renowned instructors. Open to dancers of all levels, this workshop is a great opportunity to enhance your skills and connect with the dance community.",
    },
    {
      title: 'Dance Showcase: "Rhythm & Motion"',
      date: "August 5, 2023",
      description:
        'Experience the energy and artistry of our talented dancers as they take the stage in our annual dance showcase, "Rhythm & Motion." Prepare to be amazed by captivating performances across a range of dance genres, from classical ballet to contemporary and hip-hop.',
    },
    {
      title: "Hip-Hop Masterclass",
      date: "September 10, 2023",
      description:
        "Join our renowned guest instructor for an exclusive Hip-Hop Masterclass. This intensive workshop is designed for intermediate to advanced dancers looking to refine their hip-hop skills and learn the latest choreography trends.",
    },
    {
      title: "Fall Ballet Intensive",
      date: "October 20, 2023",
      description:
        "Immerse yourself in the world of classical ballet with our Fall Ballet Intensive. Led by experienced ballet instructors, this program offers a comprehensive curriculum covering technique, repertoire, and artistry. Suitable for intermediate and advanced dancers.",
    },
  ];

  return (
    <section
      className="py-12 bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="">
        <h1
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          style={{ fontFamily: "Lemon, sans-serif" }}
          className="bg-gradient-to-r text-2xl text-left lg:text-4xl from-pink-200 to-orange-400 text-transparent bg-clip-text mt-10 mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            Upcoming events
          </span>
        </h1>
        <div
          className="flex flex-col-reverse  items-end"
          data-aos="fade-left"
          data-aos-offset="400"
          data-aos-easing="ease-in-sine"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="grid grid-cols-4 w-1/2 mb-4 bg-gradient-to-r from-gray-900 to-transparent opacity-75"
            >
              <div className="col-span-1 bg-blue-600 dark:bg-gray-900 p-6 flex flex-col items-center">
                <p className="text-white text-4xl font-bold">
                  {getMonth(event.date)}
                </p>
                <p className="text-white text-2xl">{getYear(event.date)}</p>
              </div>
              <div className="col-span-3 bg-white dark:bg-gray-700 shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
                    {event.title}
                  </span>
                </h3>
                <p className="text-gray-700 dark:text-gray-100 mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
