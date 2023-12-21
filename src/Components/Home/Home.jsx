import { useEffect } from "react";
import Banner from "/Banner.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Brands from "../Brands/Brands";
import FAQ from "../FAQ/FAQ";
import Email from "../Email/Email";


const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="min-h-screen">
      <div
        className="hero h-[400px] md:h-[600px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/gJrd9zv/home.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white ">
            <span className="text-[#00ADB5]">EasyPlan</span>, Streamlining your workflow with seamless efficiency 
            {/* <span className="text-[#00ADB5]">Next Wheels</span> */}
            </h1>
            <p className="hidden md:block">Welcome to TaskForge, where unparalleled task management meets seamless collaboration. Unleash the full potential of your productivity with our comprehensive system designed for businesses and individuals alike. Effortlessly organize, prioritize, and execute tasks with precision. Foster collaboration through intuitive features that streamline communication. Elevate your workflow experience and achieve more together. TaskForge - Transforming Tasks into Triumphs.</p>
          </div>
        </div>
      </div>
      {/* <div>
        <Brands></Brands>
      </div> */}
      {/* <div className="container mx-auto mb-32" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#00ADB5]">Most Asked Questions</h1>
        <FAQ></FAQ>
      </div> */}
      {/* <div className="container mx-auto mb-32" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        
        <Email></Email>
      </div> */}
      
    </div>
  );
};

export default Home;
