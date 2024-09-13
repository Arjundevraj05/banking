"use client"
import { useRouter } from "next/navigation";
import styles from "../app/uiux/styles.js";
import Image from "next/image";

const GetStarted = () => {
  const router = useRouter();

  // Function to handle the navigation
  const handleClick = () => {
    router.push("/sign-in");  // Redirect to the sign-in page
  };

  return (
    <div
      className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex justify-center items-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="flex justify-center items-center flex-row">
          <p className="font-poppins font-medium text-[18px] leading-[23.4px] bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            <span className="text-transparent">Get</span>
          </p>
          <Image
            src="/icons/arrow-up.svg"
            alt="arrow-up"
            width={23}
            height={23}
            objectFit="contain"
          />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px] bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
          <span className="text-transparent">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
