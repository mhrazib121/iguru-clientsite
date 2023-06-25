import Image from "next/image";
import { Inter } from "next/font/google";
import Courses from "@/Components/Courses";
import Discover from "@/Components/Discover/Discover";
import WhyChoose from "@/Components/WhyChoose/WhyChoose";
import SubscribeSection from "@/Components/SubscribeSection";
import BlogDiv from "@/Components/BlogDiv/BlogDiv";
import Achievement from "@/Components/Achivement/Achivement";
import Testimonials from "@/Components/Testimonials";
import AOS from "aos";
import { useEffect } from "react";
import HomeTopBanner from "@/Components/HomeTopBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
    });
  }, []);

  return (
    <main>
      <HomeTopBanner />
      <Courses />
      <Discover />
      <WhyChoose />
      <SubscribeSection />
      <BlogDiv />
      <Achievement />
      <Testimonials />
    </main>
  );
}
