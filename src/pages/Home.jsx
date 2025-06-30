import Banner from "../components/Banner";
import EventCategories from "../components/EventCategories";
import EventFeatures from "../components/EventFeatures";
import EventTestimonials from "../components/EventTestimonials";

const Home = () => {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <EventFeatures />
      </section>
      <section>
        <EventCategories />
      </section>
      <section>
        <EventTestimonials />
      </section>
    </div>
  );
};

export default Home;
