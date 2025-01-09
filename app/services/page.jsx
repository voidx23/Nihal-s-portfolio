"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description: "ull-stack web application development using the MERN stack, delivering dynamic, responsive, and scalable solutions for business, e-commerce, and social platforms.",
    href: ""
  },
  {
    num: "02",
    title: "Backend Development",
    description: "Develop robust, scalable backends with Node.js and Express.js, implementing RESTful APIs, business logic, middleware, and secure authentication (JWT, OAuth).",
    href: ""
  },
  {
    num: "03",
    title: "Frontend Development",
    description: "Build responsive, dynamic React.js interfaces with reusable components, optimized performance, and efficient state management (Redux, Context API).",
    href: ""
  },
  {
    num: "04",
    title: "Database Management",
    description: "Design and manage scalable MongoDB databases with optimized queries, aggregation, and indexing, including MongoDB Atlas setup for cloud deployment.",
    href: ""
  },
  {
    num: "05",
    title: "API Development and Integration",
    description: "Develop RESTful APIs and integrate third-party services like Twillio, razorpay, Google Maps, and social logins (Google).",
    href: ""
  },
  {
    num: "06",
    title: "E-Commerce Development",
    description: "Build e-commerce platforms with product listings, carts, order management, and payment gateways (Stripe, Razorpay), including search, filtering, and custom dashboards.",
    href: ""
  },
  {
    num: "07",
    title: "Real-Time Application Development",
    description: "Build real-time features like chat, live notifications, and collaboration tools using Socket.IO and WebSockets for seamless communication.",
    href: ""
  },
  {
    num: "08",
    title: "UI/UX Design Implementation",
    description: "Translate UI/UX designs into intuitive, accessible React components, collaborating with designers to bring wireframes and mockups to life.",
    href: ""
  },
  {
    num: "09",
    title: "Maintenance and Ongoing Support",
    description: "Provide post-launch support, including bug fixes, performance monitoring, and ongoing maintenance for seamless application performance.",
    href: ""
  },
  {
    num: "10",
    title: "Consulting and Code Review",
    description: "Offer consulting for optimizing MERN applications, conducting code reviews, and identifying performance improvements.",
    href: ""
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn"
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                >{service.title}</h2>
                {/* description */}
                <p className="text-white/60 ">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services