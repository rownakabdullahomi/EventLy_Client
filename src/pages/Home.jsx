import Banner from "../components/Banner";
import EventCategories from "../components/EventCategories";
import EventFeatures from "../components/EventFeatures";


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
    </div>
  );
};

export default Home;
