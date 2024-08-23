"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <motion.div initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello i am {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Kuldip Singh Rathore",
                1000,
                "Web Developer",
                1000,
                // "Mobile Developer",
                // 1000,
                "Graphic Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className=" text-[#AD7BE] text-base sm:text-lg mb-6 lg:text-xl">
            
        {/* <span>Kya dhund Raha hai lodu</span> */}
          Web and Mern Stack developer , pursuing MCA from Amity University Noida 
          </p>
          <div className="">
            
            <Link href={'#contact'}
              className=" inline-block px-6 py-3 w-full sm:w-fit rounded-full mr-4
            bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link href={'https://drive.google.com/file/d/1TXefavqosiscp7nuG5gTPryXM5JJ7QdN/view?usp=sharing'} className="px-1 py-1 w-full inline-block sm:w-fit rounded-full bg-gradient-to-br from-secondary-500 to-primary-500 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <div className=" col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
              width={300}
              height={300}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
