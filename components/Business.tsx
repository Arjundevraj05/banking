"use client";
import { features } from "../app/uiux/constants/index.js";
import Button from "./Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FeatureCard = ({ icon, title, content, index }: { icon: string, title: string, content: string, index: number }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} bg-gray-800 hover:shadow-lg transition-shadow duration-300 ease-in-out`}>
    <div className={`w-[64px] h-[64px] rounded-full flex items-center justify-center bg-blue-700`}>
      <Image src={icon} alt="feature icon" width={32} height={32} className="object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-white text-[18px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-gray-300 text-[16px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/sign-in");
  };

  return (
    <section id="features" className="flex flex-col md:flex-row py-16">
      <div className="flex-1 flex flex-col justify-center">
        <h2 class="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br class="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p class="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] ">
          With the right credit card, you can improve your financial life by building credit, earning rewards, and saving money. But with hundreds of credit cards on the market.
        </p>

        <Button
          styles="mt-10"
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
      </div>

      <div className="flex-1 flex flex-col mt-10 md:mt-0">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
