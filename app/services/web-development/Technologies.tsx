"use client";
import Image from "next/image";
import stacks from "@/public/webdev/stacks.png";
import gatsby from "@/public/webdev/techstack/gatsby.png";
import React from "@/public/webdev/techstack/React.png";
import Angular from "@/public/webdev/techstack/Angular.png";
import Typescript from "@/public/webdev/techstack/Typescript.png";
import NextJS from "@/public/webdev/techstack/NextJS.png";
import Tailwind from "@/public/webdev/techstack/Tailwind.png";
import PostgreSQL from "@/public/webdev/techstack/PostgreSQL.png";
import MySQL from "@/public/webdev/techstack/MySQL.png";
import MongoDB from "@/public/webdev/techstack/MongoDB.png";
import Nodejs from "@/public/webdev/techstack/Nodejs.png";
import ExpressJs from "@/public/webdev/techstack/ExpressJs.png";
import Laravel from "@/public/webdev/techstack/Laravel.png";
import WordPress from "@/public/webdev/wordpress.png";
import Jenkins from "@/public/webdev/techstack/Jenkins.png";
import Redis from "@/public/webdev/techstack/Redis.png";
import Nginx from "@/public/webdev/techstack/Nginx.png";
import Kubernetes from "@/public/webdev/techstack/Kubernetes.png";
import Instagram from "@/public/webdev/techstack/Instagram.png";
import Twitter from "@/public/webdev/techstack/Twitter.png";
import Facebook from "@/public/webdev/techstack/Facebook.png";
import Google from "@/public/webdev/techstack/Google.png";
import Amazon from "@/public/webdev/techstack/Amazon.png";
import Stripe from "@/public/webdev/techstack/Stripe.png";
import PayPal from "@/public/webdev/techstack/PayPal.png";
import Foursquare from "@/public/webdev/techstack/Foursquare.png";
import ElasticEmail from "@/public/webdev/techstack/ElasticEmail.png";
import Mailchimp from "@/public/webdev/techstack/mailchimp.png";
import SendGrid from "@/public/webdev/techstack/SendGrid.png";
import { ColoredButton } from "@/components/shared/ColoredButton";

const Technologies = () => {
  const techData = [
    {
      title: "Front-End Development",
      description:
        "We craft sleek, high-performing, and intuitive web applications that work flawlessly across all devices. By leveraging React and Next.js, we ensure top-notch performance, scalability, and SEO-friendliness. Additionally, we offer flexibility with frameworks like Angular, TypeScript, and Gatsby.js. Our team collaborates seamlessly with back-end developers, accelerating feature development while integrating headless CMS solutions to simplify content management and reduce backend dependencies.",
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
      title: "Database Management Systems (DBMS)",
      description:
        "A solid data foundation is crucial for any application, which is why we rely on robust, scalable database solutions like PostgreSQL, MySQL, and MongoDB. These systems ensure data security, efficient management, and seamless access, enabling businesses to handle transactions, complex queries, and large-scale operations with ease.",
      icons: [
        { name: "PostgreSQL", src: PostgreSQL },
        { name: "MySQL", src: MySQL },
        { name: "MongoDB", src: MongoDB },
      ],
    },
    {
      title: "Back-End Development",
      description:
        "We develop powerful, scalable, and future-proof back-end systems using cutting-edge technologies like JavaScript and PHP. Our solutions provide exceptional flexibility, automation capabilities, and seamless integrations, ensuring your application remains efficient, secure, and ready to scale as your business grows.",
      icons: [
        { name: "Node.js", src: Nodejs },
        { name: "ExpressJs", src: ExpressJs },
        { name: "Laravel", src: Laravel },
        { name: "WordPress", src: WordPress },
      ],
    },
    {
      title: "Infrastructure & DevOps",
      description:
        "We design and manage robust, high-performance infrastructures to support seamless deployments and operations. Our team utilizes industry-leading tools like Kubernetes, Terraform, and Jenkins to automate workflows, enhance system reliability, and ensure efficient CI/CD pipelines with GitLab CI/CD and GitHub Actions.",
      icons: [
        { name: "Jenkins", src: Jenkins },
        { name: "Redis", src: Redis },
        { name: "Nginx", src: Nginx },
        { name: "Kubernetes", src: Kubernetes },
      ],
    },
    {
      title: "API Integration",
      description:
        "Expand your application’s capabilities by integrating with leading third-party services such as Google, Amazon, Facebook, Stripe, and PayPal. Whether it’s payment processing, social media connectivity, or cloud-based automation, we seamlessly connect your app to the best APIs, enhancing user experience and business efficiency.",
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
  ];
  return (
    <section className="bg-gray-100">
      <div className="w-11/12 mx-auto max-w-7xl p-6 flex flex-col md:flex-row-reverse items-start gap-8 relative py-12 md:py-16 lg:py-20">
        {/* Left Section - Image (Fixed) */}
        <div className="w-full md:w-1/3 md:sticky md:top-35">
          <Image
            src={stacks}
            alt="FAQ about web development"
            className="w-2/3  opacity-95 md:w-full md:h-full mx-auto md:mx-0 rounded-lg hover:opacity-100 hover:scale-110 transition duration-300 ease-in-out my-4"
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

        {/* Right Section - TechStacks (Scrollable) */}
        <div className="w-full md:w-2/3 md:px-4 ">
          <div className="my-5">
            <h2 className="text-2xl font-semibold  italic text-yellow-500 text-left uppercase">
              * Building modern, responsive web apps by staying ahead with the
              latest trends..
            </h2>
            <p className="text-4xl md:text-5xl font-bold  text-duck-bluefont text-left uppercase">
              Custom web development technologies
            </p>
          </div>
          <div className="space-y-10 h-auto">
            {techData.map((section, index) => (
              <div key={index} className="flex flex-col gap-4 pt-1">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 ">
                  {section.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                  {section.description}
                </p>
                <div className="flex flex-wrap gap-3 md:gap-5 lg:gap-6">
                  {section.icons.map((icon, i) => (
                    <Image
                      key={i}
                      alt={icon.name}
                      title={icon.name}
                      src={icon.src}
                      width={40}
                      height={40}
                      className="opacity-70 cursor-pointer object-contain grayscale hover:grayscale-0 hover:scale-110 transition duration-300 ease-in-out"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
