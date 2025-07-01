
import HashLoader from "react-spinners/HashLoader";

const LoadingSpinner = () => {
  return (


    <div className="flex min-h-screen justify-center items-center space-x-4">
      <HashLoader color="#38D6B7" size={90} />
      <span className="text-4xl font-medium text-[#38D6B7]">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
