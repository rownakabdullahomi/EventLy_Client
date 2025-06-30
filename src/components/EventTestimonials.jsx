import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import Comma from "../assets/comma.png"

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
`;

const TestimonialWrapper = styled.div`
  background-color: #FFF;
  border-radius: 1rem;
  padding: 2rem;
  min-height: 230px;
`;

const Quote = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    margin: 0;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 0.95rem;
  text-transform: uppercase;
`;

const Role = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
`;

const EventTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Attending the Tech Innovators Meetup helped me connect with industry leaders. The organization was top-notch!",
      author: "Jasmine K.",
      title: "Frontend Developer",
    },
    {
      id: 2,
      text: "This event gave me insights I never expected. Great speakers and smooth experience. Highly recommended.",
      author: "Rahim A.",
      title: "Startup Founder",
    },
    {
      id: 3,
      text: "I’ve never been to a better networking event. It was fun, organized, and productive!",
      author: "Nadia R.",
      title: "Project Manager",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <img src={Comma} alt="Quote" className="mx-auto w-10 mb-4" />
        <h2 className="text-3xl font-bold text-primary">What People Are Saying</h2>
        <p className="text-gray-600 mt-2">Testimonials from past event attendees</p>
      </div>

      <Container>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            const dotClass = isSelected ? "bg-primary" : "bg-gray-300";
            return (
              <li
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  margin: "0 4px",
                  display: "inline-block",
                  cursor: "pointer",
                }}
                className={dotClass}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
                key={index}
              />
            );
          }}
        >
          {testimonials.map(({ id, text, author, title }) => (
            <TestimonialWrapper key={id}>
              <Quote>“{text}”</Quote>
              <Author>
                <Name>{author}</Name>
                <Role>{title}</Role>
              </Author>
            </TestimonialWrapper>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default EventTestimonials;
