"use client";
import PageSectionHeader from "@/components/shared/PageSectionHeader";
import { DarkContainer } from "@/components/shared/PageSections";
import Amazon from "@/public/webdev/techstack/Amazon.png";
import Angular from "@/public/webdev/techstack/Angular.png";
import ElasticEmail from "@/public/webdev/techstack/ElasticEmail.png";
import ExpressJs from "@/public/webdev/techstack/ExpressJs.png";
import Facebook from "@/public/webdev/techstack/Facebook.png";
import Foursquare from "@/public/webdev/techstack/Foursquare.png";
import gatsby from "@/public/webdev/techstack/gatsby.png";
import Google from "@/public/webdev/techstack/Google.png";
import Instagram from "@/public/webdev/techstack/Instagram.png";
import Jenkins from "@/public/webdev/techstack/Jenkins.png";
import Kubernetes from "@/public/webdev/techstack/Kubernetes.png";
import Laravel from "@/public/webdev/techstack/Laravel.png";
import Mailchimp from "@/public/webdev/techstack/mailchimp.png";
import MongoDB from "@/public/webdev/techstack/MongoDB.png";
import MySQL from "@/public/webdev/techstack/MySQL.png";
import NextJS from "@/public/webdev/techstack/NextJS.png";
import Nginx from "@/public/webdev/techstack/Nginx.png";
import Nodejs from "@/public/webdev/techstack/Nodejs.png";
import PayPal from "@/public/webdev/techstack/PayPal.png";
import PostgreSQL from "@/public/webdev/techstack/PostgreSQL.png";
import React from "@/public/webdev/techstack/React.png";
import Redis from "@/public/webdev/techstack/Redis.png";
import SendGrid from "@/public/webdev/techstack/SendGrid.png";
import Stripe from "@/public/webdev/techstack/Stripe.png";
import Tailwind from "@/public/webdev/techstack/Tailwind.png";
import Twitter from "@/public/webdev/techstack/Twitter.png";
import Typescript from "@/public/webdev/techstack/Typescript.png";
import WordPress from "@/public/webdev/wordpress.png";
import Image from "next/image";

const Technologies = () => {
  const techData = [
    {
      title: "Front-End Excellence",
      description:
        "Crafting pixel-perfect, performant user interfaces with modern frameworks. We specialize in React and Next.js ecosystems, delivering blazing-fast, SEO-optimized experiences. Our front-end architecture ensures seamless cross-device compatibility, progressive enhancement, and exceptional user engagement through cutting-edge development practices.",
      icons: [
        { name: "React", src: React },
        { name: "Angular", src: Angular },
        { name: "Typescript", src: Typescript },
        { name: "NextJS", src: NextJS },
        { name: "GatsbyJS", src: gatsby },
        { name: "Tailwind", src: Tailwind },
      ],
    },
    {
      title: "Data Architecture",
      description:
        "Building resilient data foundations with enterprise-grade database solutions. From relational to document-based systems, we architect scalable data layers that ensure integrity, security, and lightning-fast query performance for mission-critical applications handling millions of transactions.",
      icons: [
        { name: "PostgreSQL", src: PostgreSQL },
        { name: "MySQL", src: MySQL },
        { name: "MongoDB", src: MongoDB },
      ],
    },
    {
      title: "Server-Side Engineering",
      description:
        "Developing robust, scalable backend infrastructures powered by modern runtime environments. Our server-side solutions leverage Node.js and PHP ecosystems to deliver high-throughput APIs, real-time capabilities, and secure business logic that scales effortlessly with your growth trajectory.",
      icons: [
        { name: "Node.js", src: Nodejs },
        { name: "ExpressJs", src: ExpressJs },
        { name: "Laravel", src: Laravel },
        { name: "WordPress", src: WordPress },
      ],
    },
    {
      title: "Cloud & DevOps",
      description:
        "Engineering cloud-native infrastructures with automated deployment pipelines. We implement containerization, orchestration, and continuous delivery workflows using industry-standard tools, ensuring zero-downtime deployments, horizontal scalability, and operational excellence across your entire technology stack.",
      icons: [
        { name: "Jenkins", src: Jenkins },
        { name: "Redis", src: Redis },
        { name: "Nginx", src: Nginx },
        { name: "Kubernetes", src: Kubernetes },
      ],
    },
    {
      title: "Enterprise Integrations",
      description:
        "Seamlessly connecting your ecosystem with world-class third-party services. From payment gateways to social platforms, cloud services to marketing automation, we architect secure, reliable API integrations that extend your application's capabilities and deliver comprehensive digital experiences.",
      icons: [
        { name: "Instagram", src: Instagram },
        { name: "Twitter", src: Twitter },
        { name: "Facebook", src: Facebook },
        { name: "Google", src: Google },
        { name: "Amazon", src: Amazon },
        { name: "Stripe", src: Stripe },
        { name: "PayPal", src: PayPal },
        { name: "Foursquare", src: Foursquare },
        { name: "Elastic Email", src: ElasticEmail },
        { name: "Mailchimp", src: Mailchimp },
        { name: "SendGrid", src: SendGrid },
      ],
    },
    {
      title: "Quality Assurance",
      description:
        "Delivering flawless digital experiences through comprehensive testing strategies. We implement automated testing suites, performance monitoring, and continuous quality checks to ensure your application meets the highest standards of reliability, security, and user satisfaction across all environments.",
      icons: [
        { name: "Jenkins", src: Jenkins },
        { name: "Kubernetes", src: Kubernetes },
      ],
    },
  ];

  return (
    <DarkContainer>
      <div className="w-11/12 mx-auto max-w-7xl p-6 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <PageSectionHeader
          badge="Technology Stack"
          title="Enterprise Grade Technology Solutions"
          description=" Powering digital transformation with cutting-edge frameworks,
            cloud-native architectures, and battle-tested technologies that
            scale with your ambitions."
          darkMode={true}
        />

        {/* Technology Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {techData.map((section, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-500 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500"></div>

              <div className="relative z-10 space-y-5">
                {/* Title with icon number */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center">
                    <span className="text-sky-500 font-bold text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-400 transition-colors">
                    {section.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  {section.description}
                </p>

                {/* Technology Icons */}
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-4">
                    {section.icons.map((icon, i) => (
                      <div
                        key={i}
                        className="group/icon relative"
                        title={icon.name}
                      >
                        <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-md opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative bg-gray-800/50 p-3 rounded-lg border border-gray-700 hover:border-sky-500/50 transition-all duration-300 w-14 h-14 flex items-center justify-center">
                          <Image
                            alt={icon.name}
                            src={icon.src}
                            width={32}
                            height={32}
                            className="opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-300 object-contain max-w-full max-h-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DarkContainer>
  );
};

export default Technologies;
