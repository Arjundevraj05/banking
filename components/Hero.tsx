import styles from "../app/uiux/styles.js";
import Image from "next/image";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      {/* Left Section: Text and Offer */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/* Discount Badge */}
        <div className="flex flex-row items-center py-2 px-3 bg-gradient-to-r from-gray-800 to-black rounded-md shadow-lg mb-3">
          <Image src="/icons/Discount.svg" alt="discount" width={28} height={28} />
          <p className={`ml-3 text-lg font-poppins text-gray-300`}>
            <span className="text-lg font-poppins text-white">20%</span> Discount For{" "}
            <span className="text-lg text-white font-poppins">1 Month</span> Account
          </p>
        </div>


        {/* Main Heading */}
        <div className="flex flex-col sm:flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center sm:text-left">
          Unlock <br className="sm:block hidden" />
            <span className="text-gradient bg-gradient-to-r from-blue-500 via-blue-600 to-blue-900 bg-clip-text text-transparent">
              the Power 
            </span>
            <br />
            of Modern Finance.
          </h1>
          {/* Get Started Button */}
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        {/* Subheading */}

        {/* Description */}
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
        With a personalized approach, our experts guide you in selecting the best financial strategies. We assess your expenses, savings potential, and transaction history.
        </p>
      </div>

      {/* Right Section: Image and Gradients */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* Robot Image */}
        <div className="relative w-full h-[400px] md:h-[550px]">
          <Image
            src="/icons/robot.png"
            alt="billing"
            layout="fill"
            className="relative z-[5] object-contain"
          />
        </div>

        {/* Gradient Layers */}
        <div className="absolute z-[0] w-[60%] h-[60%] top-[-10%] left-[-10%] transform rotate-45 bg-gradient-to-r from-pink-400 via-red-300 to-yellow-200 opacity-70 blur-2xl" />
        <div className="absolute z-[1] w-[90%] h-[90%] rounded-full bg-gradient-to-b from-white via-gray-100 to-transparent opacity-50 bottom-[-20%] right-[-20%] blur-3xl" />
        <div className="absolute z-[2] w-[50%] h-[50%] bottom-[-10%] right-[-5%] bg-gradient-to-r from-blue-400 to-purple-600 opacity-80 blur-lg rounded-full" />

      </div>

      {/* Mobile Get Started Button */}
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
