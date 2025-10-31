"use client";

import { useInView } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";
import Image from "next/image";
import frontend from "@/public/webdev/whatwedo/frontend.png";
import backend from "@/public/webdev/whatwedo/backend.png";
import framework from "@/public/webdev/whatwedo/framework.png";
import cms from "@/public/webdev/whatwedo/cms.jpg";
import email from "@/public/webdev/whatwedo/email.png";
import add from "@/public/webdev/whatwedo/add.png";
import vps from "@/public/webdev/whatwedo/vps.png";
import ecommerce from "@/public/webdev/whatwedo/ecommerce.png";
import ai from "@/public/webdev/whatwedo/ai.png";
import qa from "@/public/webdev/whatwedo/qa.jpg";
import support from "@/public/webdev/whatwedo/support.png";
import custom_web from "@/public/webdev/whatwedo/custom_web.png";
import { DarkContainer } from "@/components/shared/PageSections";
import PageSectionHeader from "@/components/shared/PageSectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      ease: "easeInOut",
      duration: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const whatwedo = [
  {
    id: 1,
    title: "WebPage Design",
    description: [
      "First impressions matter, especially online. We craft stunning, user centric websites that capture attention and deliver exceptional experiences. Our design philosophy merges aesthetic excellence with strategic functionality, ensuring every element serves your business objectives.\n\nFrom responsive layouts to intuitive navigation, we create digital experiences that resonate with your audience. Whether launching a corporate presence or building an interactive e-commerce destination, our designs drive engagement and foster meaningful connections. Transform your online presence into a powerful business asset.",
    ],
    image: frontend,
  },
  {
    id: 2,
    title: "API Development",
    description: [
      "Powerful applications require robust foundations. Our backend architecture services deliver secure, scalable, and high performance server solutions that power your digital ecosystem. We specialize in RESTful API design, microservices architecture, and database optimization to ensure seamless operations.\n\nFrom handling complex business logic to managing millions of transactions, our backend solutions are engineered for reliability and growth. We build the invisible infrastructure that keeps your platform running flawlessly, allowing you to focus on what matters most—your business.",
    ],
    image: backend,
  },
  {
    id: 3,
    title: "Framework Based",
    description: [
      "Modern challenges demand modern solutions. We harness industry leading frameworks like MERN, Next.js, and TALL stack to build lightning-fast, SEO optimized applications that scale effortlessly. Our framework expertise ensures you get production ready solutions with best practices built in.\n\nWhether developing sophisticated web applications or streamlined landing experiences, we architect solutions that prioritize performance, security, and maintainability. Leverage cutting edge technology stacks designed to accelerate your growth and keep you ahead of the competition.",
    ],
    image: framework,
  },
  {
    id: 4,
    title: "WordPress (CMS)",
    description: [
      "Your brand deserves a unique digital identity. We specialize in custom WordPress development that goes beyond templates, creating bespoke experiences that authentically represent your business. Our WordPress solutions combine visual excellence with intuitive content management.\n\nEvery element is crafted to reflect your brand's personality while providing effortless control over your content. From sophisticated design to streamlined workflows, we empower you to manage your digital presence with confidence.",
      "Content management should empower, not complicate. Our CMS solutions—spanning WordPress, Joomla, and Drupal—put you in complete control without requiring technical expertise. We customize platforms to match your unique workflows, ensuring content updates are intuitive and efficient.\n\nWith our tailored CMS implementations, you gain the freedom to evolve your website independently while maintaining professional quality. Focus on creating compelling content while we ensure your platform grows alongside your ambitions.",
    ],
    image: cms,
  },
  {
    id: 5,
    title: "Email Template",
    description: [
      "Email remains your most direct channel to customers. We design responsive, conversion optimized email templates that command attention in crowded inboxes. Each template is meticulously crafted to reflect your brand while driving measurable engagement.\n\nFrom welcoming new subscribers to announcing product launches, our email designs blend compelling visuals with strategic messaging. Every element is tested across devices to ensure flawless delivery and maximum impact. Elevate your email marketing with templates that truly perform.",
    ],
    image: email,
  },
  {
    id: 6,
    title: "Add / Remove Features",
    description: [
      "Digital platforms must evolve with your business. Our feature enhancement services keep your website agile and competitive. We seamlessly integrate new capabilities while streamlining or removing outdated functionality that no longer serves your goals.\n\nWhether implementing advanced e-commerce features, adding payment integrations, or optimizing existing workflows, we ensure every change enhances user experience. Stay relevant and responsive to market demands with strategic platform evolution that drives continuous improvement.",
    ],
    image: add,
  },
  {
    id: 7,
    title: "VPS Integration",
    description: [
      "Scale demands infrastructure that can keep pace. Our VPS deployment services provide enterprise grade hosting solutions with complete control and optimal performance. We handle the complexity of server provisioning, configuration, and automation so you can focus on growth.\n\nFrom initial setup to ongoing management, we ensure your infrastructure delivers consistent uptime and blazing fast performance. With automated deployment pipelines and proactive monitoring, your platform remains reliable and secure as your business expands.",
    ],
    image: vps,
  },
  {
    id: 8,
    title: "E-Commerce Solutions",
    description: [
      "Transform browsers into buyers with comprehensive e-commerce platforms built for conversion. We integrate intelligent personalization, frictionless checkout flows, and robust analytics to maximize your revenue potential while delighting customers.\n\nFrom inventory management to payment processing and customer insights, we create end-to-end shopping experiences that drive loyalty. Build an online store that doesn't just sell products—it creates lasting customer relationships and sustainable growth.",
    ],
    image: ecommerce,
  },
  {
    id: 9,
    title: "AI Integration",
    description: [
      "Unlock competitive advantages through intelligent automation. Our AI integration services transform operations by automating repetitive tasks, extracting insights from complex data, and enabling smarter decision making across your organization.\n\nFrom conversational AI assistants to predictive analytics and personalized recommendation engines, we implement practical AI solutions that deliver tangible business value. Stay ahead by harnessing artificial intelligence to work smarter, not harder.",
    ],
    image: ai,
  },
  {
    id: 10,
    title: "QA for Web",
    description: [
      "Excellence requires vigilance. Our comprehensive quality assurance processes catch issues before they reach your users, ensuring every interaction meets the highest standards. We combine automated testing frameworks with manual expertise to validate functionality, performance, and security.\n\nThrough rigorous testing protocols, we maintain platform stability while identifying optimization opportunities. Deliver flawless experiences that build trust and keep users coming back with our thorough QA methodology.",
    ],
    image: qa,
  },
  {
    id: 11,
    title: "Website Support",
    description: [
      "Reliable operations require dedicated support. Our maintenance services leverage DevOps best practices and SRE principles to keep your platform performing optimally. We proactively monitor, rapidly resolve issues, and continuously optimize for speed, security, and reliability.\n\nFrom bug fixes to performance tuning and security updates, we ensure your website remains fast, secure, and available. Focus on your business while we handle the technical complexities of keeping your digital presence running smoothly.",
    ],
    image: support,
  },
  {
    id: 12,
    title: "Custom Web Application",
    description: [
      "Generic solutions rarely address unique challenges. Our custom application development creates tailored software that perfectly aligns with your specific workflows and business objectives. Unlike off the shelf products, custom applications offer the flexibility to adapt as your needs evolve.\n\nFrom initial conception through deployment and beyond, we partner with you to build applications that enhance productivity, streamline operations, and drive measurable business outcomes. Invest in technology that grows with your vision.",
    ],
    image: custom_web,
  },
];

export default function WhatWeDo() {
  const ref = useRef(null);
  const contentRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isContentInView = useInView(contentRef, { once: false, amount: 0.3 });
  const [selectedwedo, setSelectedWeDo] = useState(0);

  const baseButtonStyle =
    "relative px-4 py-3 rounded-lg border transition-all duration-300 ease-out text-base md:text-lg font-medium overflow-hidden group";
  const hoverEffect =
    "bg-slate-800/40 border-slate-700/50 text-slate-200 hover:bg-sky-500/20 hover:border-sky-400/50 hover:text-sky-100 hover:shadow-lg hover:shadow-sky-500/20 hover:scale-[1.02]";
  const activeEffect =
    "bg-gradient-to-r from-sky-500 to-blue-600 border-sky-400 text-white shadow-xl shadow-sky-500/30 scale-[1.02]";

  const handleSelectedBtn = (selected: number): void => {
    setSelectedWeDo(selected);
  };

  return (
    <DarkContainer
      className="py-16 md:py-20 lg:py-24"
      gridLines={true}
      decorativeElements={
        <>
          <div className="absolute inset-0 opacity-20 -z-50">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
        </>
      }
    >
      <PageSectionHeader
        badge="Our Services"
        title="What We Do"
        description="Transforming ideas into powerful digital experiences from custom WordPress sites and cutting-edge web development to seamless backend solutions and impactful email campaigns, we build the digital presence that drives your business forward."
        darkMode={true}
        customPWidth="max-w-5xl"
      />

      <motion.div
        // @ts-expect-error - ignore
        variants={containerVariants}
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 w-11/12 xl:max-w-7xl mx-auto"
      >
        {/* Left Column - First 6 Services */}
        <motion.div
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="col-span-1 md:col-span-3 lg:col-span-1 w-full flex flex-row flex-wrap justify-center lg:justify-start gap-3 lg:flex-col"
        >
          {whatwedo.slice(0, 6).map((wedo) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${baseButtonStyle} ${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              }`}
              key={wedo.id}
            >
              <span className="relative z-10">{wedo.title}</span>
              {selectedwedo === wedo.id - 1 && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}

          {/* Mobile: Show remaining services */}
          {whatwedo.slice(6).map((wedo) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${baseButtonStyle} ${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              } flex lg:hidden`}
              key={wedo.id}
            >
              <span className="relative z-10">{wedo.title}</span>
              {selectedwedo === wedo.id - 1 && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Center Column - Content Display */}
        <motion.div
          ref={contentRef}
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="col-span-1 md:col-span-3 lg:col-span-3 px-4 lg:px-6"
        >
          <motion.div
            key={selectedwedo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-slate-700/50 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 mb-6 text-center border-b border-slate-700/50 pb-4">
              {whatwedo[selectedwedo].title}
            </h2>

            <div className="relative">
              <motion.div
                // @ts-expect-error - ignore
                variants={imageVariants}
                initial="hidden"
                animate={isContentInView ? "visible" : "hidden"}
                className="relative"
              >
                <Image
                  src={whatwedo[selectedwedo].image}
                  alt={whatwedo[selectedwedo].title}
                  width={400}
                  height={300}
                  quality={100}
                  className="float-left w-full md:w-1/2 lg:w-2/5 h-auto md:h-[28vh] lg:h-[32vh] xl:h-[36vh] object-cover rounded-xl shadow-lg shadow-black/30 mb-4 md:mr-6 border border-slate-700/50 hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-xl pointer-events-none"></div>
              </motion.div>

              <div className="text-slate-300 leading-relaxed space-y-4 text-base md:text-lg">
                {whatwedo[selectedwedo].description.map((des, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="text-justify first-letter:text-2xl first-letter:font-bold first-letter:text-sky-400"
                  >
                    {des}
                  </motion.p>
                ))}
              </div>

              <div className="clear-both"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Remaining Services (Desktop Only) */}
        <motion.div
          // @ts-expect-error - ignore
          variants={itemVariants}
          className="col-span-1 w-full hidden lg:flex justify-start flex-col gap-3"
        >
          {whatwedo.slice(6).map((wedo) => (
            <button
              onClick={() => handleSelectedBtn(wedo.id - 1)}
              className={`${baseButtonStyle} ${
                selectedwedo === wedo.id - 1 ? activeEffect : hoverEffect
              }`}
              key={wedo.id}
            >
              <span className="relative z-10">{wedo.title}</span>
              {selectedwedo === wedo.id - 1 && (
                <motion.div
                  layoutId="activeBackground"
                  className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </motion.div>
      </motion.div>
    </DarkContainer>
  );
}
