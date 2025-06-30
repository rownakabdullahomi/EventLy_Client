import Headings from "../components/shared/Heading";

const categoryData = [
  { name: "Tech", imgSrc: "https://cdn-icons-png.flaticon.com/128/9068/9068679.png" },
  { name: "Education", imgSrc: "https://cdn-icons-png.flaticon.com/128/3135/3135755.png" },
  { name: "Health", imgSrc: "https://cdn-icons-png.flaticon.com/128/2965/2965567.png" },
  { name: "Networking", imgSrc: "https://cdn-icons-png.flaticon.com/128/3208/3208707.png" },
  { name: "Sports", imgSrc: "https://cdn-icons-png.flaticon.com/128/991/991950.png" },
  { name: "Cultural", imgSrc: "https://cdn-icons-png.flaticon.com/128/2972/2972179.png" },
  { name: "Music", imgSrc: "https://cdn-icons-png.flaticon.com/128/727/727218.png" },
  { name: "Business", imgSrc: "https://cdn-icons-png.flaticon.com/128/3135/3135706.png" },
];

const EventCategories = () => {
  return (
    <section className="px-4 lg:px-6 py-16 bg-base-100">
      <Headings
        heading="Events for Every Interest"
        subHeading="Discover events by categories that matter to you."
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-10">
        {categoryData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-base-300 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/10">
              <img src={item.imgSrc} alt={item.name} className="w-12 h-12" />
            </div>
            <p className="mt-4 text-lg font-semibold text-center text-primary">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCategories;
