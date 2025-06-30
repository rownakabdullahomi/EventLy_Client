/* eslint-disable no-unused-vars */
import { FaCalendarPlus, FaUsers, FaFilter, FaBell, FaClock, FaChartLine } from "react-icons/fa";
import { Bounce, Slide, Fade } from "react-awesome-reveal";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Effortless Event Creation",
      description: "Create and publish events with all details in one place—easy and quick.",
      icon: <FaCalendarPlus className="text-5xl text-indigo-600" />,
      animation: Bounce,
    },
    {
      id: 2,
      title: "Real-time Attendee Count",
      description: "Automatically track how many people have joined your event.",
      icon: <FaUsers className="text-5xl text-emerald-600" />,
      animation: Slide,
    },
    {
      id: 3,
      title: "Smart Filtering & Search",
      description: "Find events by title or filter them by date, week, or month instantly.",
      icon: <FaFilter className="text-5xl text-pink-600" />,
      animation: Fade,
    },
    {
      id: 4,
      title: "Instant Notifications",
      description: "Get notified when someone joins your event or updates an existing one.",
      icon: <FaBell className="text-5xl text-yellow-500" />,
      animation: Bounce,
    },
    {
      id: 5,
      title: "Future Date Validation",
      description: "Ensure events are scheduled only for upcoming valid dates and times.",
      icon: <FaClock className="text-5xl text-blue-500" />,
      animation: Slide,
    },
    {
      id: 6,
      title: "Performance Analytics",
      description: "Monitor engagement with event stats and user activity insights.",
      icon: <FaChartLine className="text-5xl text-red-500" />,
      animation: Fade,
    },
  ];

  return (
    <section className="bg-base-100 px-4 lg:px-6 py-16">

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-3">
          Why Choose Our Event Platform?
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Discover a smarter way to manage, share, and join events. Designed for modern collaboration.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {features.map(({ id, title, description, icon, animation: Animation }) => (
          <Animation key={id} duration={1500}>
            <div className="bg-base-300 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          </Animation>
        ))}
      </div>
    </section>
  );
};

export default Features;
