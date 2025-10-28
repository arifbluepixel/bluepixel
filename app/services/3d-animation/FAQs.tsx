"use client";

import { ColoredButton } from "@/components/shared/ColoredButton";
import faq from "@/public/animations/faq.json";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const faqs = [
  {
    question: "What is 3D animation?",
    answer:
      "3D animation is the art of creating characters or objects in a three-dimensional space. All three aspects of length, width, and depth are employed to come up with the 3D effects. Computers are used to create an object, character, or entity, and through manipulation, 3D illustrations are given a virtual framework. After completing the entire animation modeling process, animators manifest an object or skeleton. 3D animation serves various industries like medicine and gaming. Also, it is widely used in presentations and marketing videos.",
  },
  {
    question: "What will be the cost of a 3D animation project?",
    answer:
      "It's absolutely important to get one thing straight: 3D animation services cost more than any other animation style. Typically, you can expect a realistic 3D animation to cost you around $1500-$5000. One thing's for sure, Anideos is cost-effective and time-saving so your money is in safe hands. Every client wishes to get things done on the least budget and lucky for you, our 3D animation studio is a professional one-stop shop. You can fill in your 3D product expectations and we'll create the rest for you in a budget that suits us both.",
  },
  {
    question: "Why use 3D animated videos?",
    answer:
      "Because your brand is one of a kind. You wouldn't want to risk getting lost in a sea of companies. A 3D animation service is the only video production partnership that can help you out. More often than not, it's the product that pushes you to 3D animation. Not that there's a need to say it, but the way 3D shows your product or service to the audience is unbeatable. If you think other animation styles won't cut it for the product you're introducing in the market, 3D animation is the answer. Also, why should ideas stay just ideas? Ping our 3D studio to craft you unique cartoons, objects, or videos—whatever sails your boat and show it off to the world!",
  },
  {
    question: "How long does the production take?",
    answer:
      "Time for the production stays parallel with the style and complexity. It goes without saying that these things have a huge say when it comes to creating animations. Yet, we set out with a timeline of 4-8 weeks in mind. If your company is in for a premium-quality 3D video, then be prompt with the responses. Because it adds to the overall production time of projects.\nAs a highly professional 3D animation company, Anideos knows the importance of commitment and creating quality animation. Our 3D studio delivers prompt 3D video creation, editing, and rendering services. We work on every 3D product video with the project deadlines in mind. With our team full of creative animation experts, we deliver the tasks as fast as humanly possible.",
  },
  {
    question: "Why our 3D animation production company?",
    answer:
      "Anideos believes in uniqueness. Our professionals create 3D animated videos that are different from one another, possessing strong designs that even competitors find hard to copy. We add music to the 3D animation videos and films that blend perfectly with the animation; making people remember our concept and creation for an extended period. It's also worth mentioning that we offer up to three revisions at each step of the production process and our team of animators is very friendly to deal with. We keep our pricing low so that even startups or full-fledged companies can avail of our services for their 3D animation projects.",
  },
  {
    question: "What's your approach to creating 3D animated videos?",
    answer:
      "As one of the highly professional 3D animation production studios, we know the importance of commitment and creating high-quality animation. Our company delivers fast services, keeping the project timeline in mind. With our team full of creative animation experts, rest assured that you'll be delivered an exceptional video!",
  },
  {
    question: "Difference Between 2D and 3D Animation Services?",
    answer:
      "2D and 3D animation are both unique on their own. Both use different methods for the production of images and animation pieces. A 2D animation is an art form that involves the movement of objects and characters in a two-dimensional space that only caters to length and width. Whereas, 3D animation is done via computer software and is concerned with the design of three-dimensional models and their movement. When compared to 2D animation, 3D animation is far more complex, time-consuming, and costly.",
  },
  {
    question: "How Does 3D Animation service work?",
    answer:
      "The first step of 3D video production is to create an array of still images (using a computer) to present the illusion of movement in three-dimensional space (when they are being operated). To perform this, 3D animation software, like 3D Max or Autodesk Maya, and a high-quality computer are needed (we have many of them). Frames are created and then the computer is used to exhibit all the essential details. A set of parameters helps to illustrate how the components should seem and proceed.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openIndex !== null && contentRefs.current[openIndex]) {
      contentRefs.current[openIndex]!.style.maxHeight =
        contentRefs.current[openIndex]!.scrollHeight + "px";
    }
  }, [openIndex]);

  return (
    <section className="bg-gray-50">
      <div className="w-11/12 max-w-7xl mx-auto p-6 flex flex-col md:flex-row items-start gap-8 relative py-12 md:py-16 lg:py-20">
        {/* Left Section - Image (Fixed) */}
        <div className="w-full md:w-1/3 md:sticky md:top-30">
          <Lottie
            animationData={faq}
            loop
            className="w-full h-full rounded-lg"
          />
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

        {/* Right Section - FAQ (Scrollable) */}
        <div className="w-full md:w-2/3 md:px-4 ">
          <div className="flex flex-col gap-3 my-5 ">
            <h2 className="text-2xl font-semibold font-oswald italic text-yellow-600 text-left uppercase">
              * Your Questions, Answered!?!
            </h2>
            <p className="text-4xl md:text-5xl font-extrabold font-oswald text-duck-bluefont text-left uppercase">
              FAQs
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg shadow-sm overflow-hidden"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button className="w-full text-left p-4 flex justify-between items-center font-medium text-gray-800 bg-yellow-100 hover:bg-yellow-200 transition duration-300 ease-in-out cursor-pointer">
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[index] = el;
                  }}
                  className={`transition-[max-height] duration-300 ease-in-out overflow-hidden bg-white text-gray-600 border-t`}
                  style={{ maxHeight: openIndex === index ? "1000px" : "0px" }}
                >
                  <div className="p-4">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
