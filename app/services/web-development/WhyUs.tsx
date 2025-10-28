"use client";
import { ColoredButton } from "@/components/shared/ColoredButton";
import whyus from "@/public/webdev/whyus.png";
import Image from "next/image";

const WhyUs = () => {
  const features = [
    {
      title: "Experienced Team",
      description:
        "Our developers bring years of expertise to build high-quality web solutions.",
    },
    {
      title: "Diverse Projects",
      description:
        "Successfully delivered projects across various industries with excellence.",
    },
    {
      title: "Innovation & Reliability",
      description:
        "Proven expertise and innovation make us a reliable choice in the industry.",
    },
    {
      title: "Trusted by Many",
      description:
        "We have partnered with many businesses to bring their ideas to life.",
    },
    {
      title: "Cutting-Edge Technology",
      description:
        "We leverage the latest technologies to build scalable and high-performing applications.",
    },
    {
      title: "Client-Centered Approach",
      description:
        "Our development process is tailored to meet your unique business needs.",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="w-11/12 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start relative py-12 md:py-16 lg:py-20 gap-10">
        {/* Left Section - Image (Fixed) */}
        <div className="w-full md:w-1/3 md:sticky md:top-30 space-y-4 ">
          <Image
            src={whyus}
            alt="FAQ about web development"
            className="w-2/3 md:w-full md:h-full mx-auto md:mx-0 rounded-lg shadow-xl hover:scale-110 transition duration-300 ease-in-out "
          />
        </div>

        {/* Right Section - Cards (Scrollable) */}
        <div className="w-full md:w-2/3 space-y-5">
          <h2 className="text-2xl font-semibold font-oswald italic text-yellow-500 text-left uppercase">
            * Why choose us as your web developers?!
          </h2>
          <p className="text-4xl md:text-5xl font-bold font-oswald text-duck-bluefont text-left uppercase">
            Why Us ?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pt-4 ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white hover:bg-yellow-400 group hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
              >
                <h3 className="text-xl font-bold text-duck-bluefont group-hover:text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          <ColoredButton
            ColoringButton={{
              id: "startYourProject1",
              name: "Start Your Project",
              link: "/contact-us",
            }}
            isPrimary={true}
            isFullWidth={true}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
