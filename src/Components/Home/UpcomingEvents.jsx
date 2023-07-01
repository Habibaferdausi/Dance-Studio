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
      className="py-12 bg-gray-100 bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "700px",
      }}
    >
      <div className="bg-gray-200 dark:bg-gray-700 w-1/2 p-5">
        <h1
          style={{ fontFamily: "Lemon, sans-serif" }}
          className="bg-gradient-to-r text-2xl text-left lg:text-4xl from-pink-400 to-orange-700 text-transparent bg-clip-text mt-10 mb-10"
        >
          <span className="bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
            Upcoming Events
          </span>
        </h1>
        <ul className="steps text-center mx-auto steps-vertical">
          {events.map((event, index) => (
            <li
              key={index}
              className={`step ${
                index === events.length - 1 ? "" : "step-primary"
              }`}
            >
              {event.title}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UpcomingEvents;
