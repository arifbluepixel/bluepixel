"use client";

import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";
import Image from "next/image";
import frontend from "@/public/webdev/whatwedo/frontend.png";
import backend from "@/public/webdev/whatwedo/backend.png";
import framework from "@/public/webdev/whatwedo/framework.png";
// import wordpress from "@/public/webdev/wordpress.png";
import cms from "@/public/webdev/whatwedo/cms.jpg";
import email from "@/public/webdev/whatwedo/email.png";
import add from "@/public/webdev/whatwedo/add.png";
import vps from "@/public/webdev/whatwedo/vps.png";
import ecommerce from "@/public/webdev/whatwedo/ecommerce.png";
import ai from "@/public/webdev/whatwedo/ai.png";
import qa from "@/public/webdev/whatwedo/qa.jpg";
import support from "@/public/webdev/whatwedo/support.png";
import custom_web from "@/public/webdev/whatwedo/custom_web.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const whatwedo = [
  {
    id: 1,
    title: "WebPage Design",
    description: [
      "Your website is often the first impression your customers have of your business. Make it count! Our website design services combine cutting-edge design principles with a user-first approach to create websites that not only look amazing but also provide a seamless user experience.\n\nWe focus on creating visually appealing, mobile-optimized, and intuitive websites that are aligned with your brand’s values and goals. Whether you need a sleek business website or an engaging e-commerce platform, we design websites that captivate visitors and convert them into customers. Ready to make an impact online? Let’s design your digital future.",
    ],
    image: frontend,
  },
  {
    id: 2,
    title: "API Development",
    description: [
      "Behind every successful web application is a powerful backend, and that’s where we come in. Our backend development services ensure that your website runs smoothly, securely, and efficiently. From API development to database management, we create scalable and robust server-side solutions that support your website’s growth.\n\nWhether you're building a custom platform or integrating complex functionalities, our team of backend developers has the expertise to deliver solutions that scale with your business needs. Let's build the powerful backend that will help your business thrive and grow.",
    ],
    image: backend,
  },
  {
    id: 3,
    title: "Framework-Based",
    description: [
      "In today's digital world, speed, scalability, and performance are essential – and that's exactly what our framework-based web development services deliver. Whether it's a dynamic web app built on the MERN stack, a fast, SEO-friendly Next.js website, or a robust and modern TALL stack solution, we have the expertise to build the perfect platform for your needs.\n\nOur team leverages cutting-edge technologies to develop high-performance websites and applications that grow with your business. From complex web applications to simple landing pages, we craft solutions that are secure, scalable, and fast. Ready to scale your business to new heights? Let us build the framework for your success.",
    ],
    image: framework,
  },

  {
    id: 4,
    title: "WordPress (CMS)",
    description: [
      [
        `Your website is the digital face of your brand, and at [Your Company], we transform that face into a masterpiece. With our WordPress web development services, we don't just build websites – we create captivating, user-friendly experiences that reflect your unique business identity.\n\nWhy settle for a generic template when you can have a tailor-made website that speaks directly to your audience? Our team of WordPress experts is dedicated to bringing your vision to life with seamless functionality, beautiful design, and easy-to-manage content. `,
      ],
      [
        `Let’s create a website that’s not only functional but also a true representation of your brand’s personality and values.Managing your content shouldn’t be a hassle.With our Dynamic CMS- based web development, you’ll have a powerful, user - friendly content management system that puts you in control.Whether you’re using WordPress, Joomla, or Drupal, we’ll customize your CMS to match your business needs and ensure a seamless experience for both you and your visitors.\n\nOur custom - built CMS solutions make it easy to update and manage your site content without the need for technical knowledge.With our expertise, you’ll be empowered to effortlessly grow and scale your website, while providing your users with the dynamic experience they crave.`,
      ],
    ],
    // image: wordpress,
    image: cms,
  },
  {
    id: 5,
    title: "Email Template",
    description: [
      "Emails are one of the most powerful tools in your marketing arsenal, and we help you make the most of them. Our email template design and development services provide you with beautifully designed, responsive, and functional email templates that are optimized for conversions.\n\nWhether it’s a welcome email, a promotional campaign, or a monthly newsletter, we create designs that grab attention and inspire action. With our attention to detail, your emails will not only look amazing but also deliver measurable results. Let’s create emails that get noticed – and get clicked.",
    ],
    image: email,
  },
  {
    id: 6,
    title: "Add / Remove Features",
    description: [
      "Stay ahead of the curve by adding new features or remove unnecessary and unused features that enhance your website or web application. Our new feature addition service allows you to seamlessly integrate advanced functionality into your existing platform.\n\nFrom adding e-commerce capabilities to integrating new payment systems, we help you stay current with industry trends and user demands. Our goal is to provide scalable and efficient solutions that improve user engagement and enhance the overall experience. Ready to take your platform to the next level? Let’s add features that drive growth.",
    ],
    image: add,
  },
  {
    id: 7,
    title: "VPS Integration",
    description: [
      "When your website or application needs to scale, VPS integration is a key component of performance and security. Our VPS integration services include everything you need to host, deploy, and manage your website on a virtual private server.\n\nWe handle the technical side of things, from server setup and configuration to deploying your application with automation scripts. With our help, you can be confident your platform will run efficiently, securely, and without downtime. Ready to take your infrastructure to the next level? Let’s scale your business with VPS integration.",
    ],
    image: vps,
  },
  {
    id: 8,
    title: "E-Commerce Solutions",
    description: [
      "Create a robust e-commerce platform that attracts your audience, drives sales, and ensures high user retention. Our solutions incorporate the latest trends, including AI-driven personalization and seamless checkout experiences.\n\nFrom product management to payment gateways and analytics, we provide end-to-end development to enhance your online store. Let’s build an e-commerce experience that keeps customers engaged and coming back for more.",
    ],
    image: ecommerce,
  },
  {
    id: 9,
    title: "AI Integration",
    description: [
      "Enhance your business with AI-powered automation and predictive analytics. Our AI integration services streamline routine tasks, analyze large datasets, and help you make data-driven decisions.\n\nFrom chatbot automation to recommendation systems and advanced data insights, we implement AI solutions that drive efficiency and innovation. Stay ahead of the competition by leveraging AI for smarter operations.",
    ],
    image: ai,
  },
  {
    id: 10,
    title: "QA for Web",
    description: [
      "Ensure flawless user experiences with our rigorous quality assurance (QA) testing. We identify potential issues before they escalate, ensuring your web application meets the highest performance and usability standards.\n\nUsing manual and automated testing techniques, we help you maintain a secure, bug-free, and efficient platform. Deliver excellence with our QA expertise.",
    ],
    image: qa,
  },
  {
    id: 11,
    title: "Website Support",
    description: [
      "Fixing Existing Bugs and Keep your website running smoothly with our comprehensive support services. We use DevOps CI/CD practices and Site Reliability Engineering (SRE) approaches to optimize performance, security, and uptime.\n\nFrom regular maintenance to rapid issue resolution, we ensure a seamless user experience while keeping your website fast, secure, and scalable.",
    ],
    image: support,
  },
  {
    id: 12,
    title: "Custom Web Application ",
    description: [
      "Build a tailor-made web application that aligns perfectly with your business goals. Unlike off-the-shelf solutions, our custom development approach ensures flexibility, scalability, and seamless integration with your workflow.\n\nFrom concept to deployment, we work closely with you to create a web application that enhances efficiency, user engagement, and business growth.",
    ],
    image: custom_web,
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [selectedwedo, setSelectedWeDo] = useState(0);
  const hoverEffect =
    "bg-gray-50 p-1 rounded-lg hover:bg-yellow-400 hover:text-black  font-light hover:font-semibold hover:text-center";
  const activeEffect =
    "bg-yellow-400 p-1 rounded-lg text-black font-semibold  text-center ";
  const handleSelectedBtn = (selected: number): void => {
    setSelectedWeDo(selected);
  };
  return (
    <section className="overflow-hidden bg-gray-200 py-12 md:py-16 lg:py-20">
      <motion.div
        // @ts-expect-error - ignore
        variants={containerVariants}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full mx-auto pb-10 z-10 "
      >
        <motion.h2
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center  text-4xl mb-6 md:text-5xl text-duck-bluefont uppercase font-extrabold z-10"
        >
          What We Do
        </motion.h2>{" "}
        <motion.p
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="text-center text-lg md:text-xl mb-12 text-duck-bluefontlight font-semibold w-2/3 mx-auto"
        >
          Transforming ideas into powerful digital experiences – from custom
          WordPress sites and cutting-edge web development to seamless backend
          solutions and impactful email campaigns, we build the digital presence
          that drives your business forward.
        </motion.p>
      </motion.div>
      <motion.div
        // @ts-expect-error - ignore
        variants={containerVariants}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-11/12 xl:max-w-7xl mx-auto "
      >
        <motion.div className="col-span-1 md:col-span-3 lg:col-span-1 w-full font-medium flex flex-row flex-wrap justify-center lg:justify-start gap-2 lg:flex-col">
          {whatwedo.slice(0, 6).map((wedo) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              } flex items-center justify-center text-left md:justify-start lg:w-full min-h-8 max-h-16 my-0.5 px-2 md:px-4 md:py-5 cursor-pointer border border-gray-400 text-[16px] md:text-xl`}
              key={wedo.id}
            >
              {wedo.title}
            </button>
          ))}
          {whatwedo.slice(6).map((wedo) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              } flex lg:hidden  items-center justify-center text-left md:justify-start lg:w-full min-h-8 max-h-16 my-0.5 px-2 md:px-4 md:py-5 cursor-pointer border border-gray-400 text-[16px] md:text-xl`}
              key={wedo.id}
            >
              {wedo.title}
            </button>
          ))}
        </motion.div>
        <motion.div
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="col-span-1 md:col-span-3 lg:col-span-3 px-4 flex flex-col gap-3"
        >
          <h2 className="text-2xl my-3 text-center  font-extrabold text-duck-bluefontlight md:border-t-0 border-t-gray-300 border-t-2 pt-5 md:pt-0">
            {whatwedo[selectedwedo].title}
          </h2>

          <div className="relative overflow-hidden">
            <Image
              src={whatwedo[selectedwedo].image}
              alt={whatwedo[selectedwedo].title}
              width={300}
              height={100}
              quality={100}
              className="float-left w-full md:w-1/2 lg:w-2/5 md:h-[25vh] lg:h-[30vh] xl:h-[35vh] object-fit rounded-lg my-2 md:my-0 md:mr-4 mb-3"
            />
            <div className="text-justify text-lg space-y-2">
              {whatwedo[selectedwedo].description.map((des, index) => (
                <p key={index}>
                  {des} <br />
                </p>
              ))}
            </div>
            <div className="clear-both"></div>
          </div>
        </motion.div>
        <motion.div className="col-span-1 w-full font-medium hidden lg:flex justify-start flex-wrap flex-col gap-2">
          {whatwedo.slice(6).map((wedo, index) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              } flex items-center justify-center md:justify-start text-left md:w-full min-h-10 max-h-16 my-0.5 px-2 md:px-4 md:py-5 cursor-pointer border border-gray-400 text-lg text-[16px] md:text-xl`}
              key={index}
            >
              {wedo.title}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
