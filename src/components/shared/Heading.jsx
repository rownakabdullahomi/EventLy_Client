

const Headings = ({heading, subHeading}) => {
    return (
        <div className="text-center mb-13">
          <h2 className="text-4xl font-bold text-primary mb-3">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            {subHeading}
          </p>
        </div>
    );
};



export default Headings;