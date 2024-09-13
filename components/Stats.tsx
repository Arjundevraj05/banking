"use client";
import { stats } from "../app/uiux/constants/index.js";
import styles from "../app/uiux/styles.js";
import CountUp from 'react-countup';

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => {
      // Extract the numeric part from value
      const numValue = parseFloat(stat.value.replace(/[^0-9.]/g, ''));
      const hasPlus = stat.value.includes("+");
      const hasRupee = stat.value.includes("₹");
      const hasM = stat.value.includes("M");

      return (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {/* Add CountUp to animate the number */}
            {hasRupee && <span>₹</span>}
            <CountUp start={0} end={numValue} duration={2.5} separator="," />
            {hasM && <span>M</span>}
            {hasPlus && <span>+</span>}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] uppercase ml-3 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            {stat.title}
          </p>
        </div>
      );
    })}
  </section>
);

export default Stats;
