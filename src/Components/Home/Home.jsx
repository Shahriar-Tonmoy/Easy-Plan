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
    <div>
      <div
        className="hero h-[400px] md:h-[600px]"
        style={{
          backgroundImage: "url('https://i.ibb.co/1bvQ0GF/11125.jpg')",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-white ">
            Discover Your Next Ride with <span className="text-[#00ADB5]">Next Wheels</span>
            </h1>
            <p className="hidden md:block">Welcome to Next Wheels, your premier destination for automotive excellence! Whether you're a car enthusiast, a first-time buyer, or looking to upgrade your current vehicle, we've got you covered. With a wide range of top-notch automotive brands and models to choose from, we make finding your dream car a breeze. Our commitment to quality, transparency, and customer satisfaction sets us apart. Explore our showroom, browse our extensive inventory, and let our team of experts guide you towards your next set of wheels. Your journey towards automotive perfection begins here at Next Wheels. Start exploring today!</p>
          </div>
        </div>
      </div>
      <div>
        <Brands></Brands>
      </div>
      <div className="container mx-auto mb-32" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#00ADB5]">Most Asked Questions</h1>
        <FAQ></FAQ>
      </div>
      <div className="container mx-auto mb-32" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        
        <Email></Email>
      </div>
      
    </div>
  );
};

export default Home;
