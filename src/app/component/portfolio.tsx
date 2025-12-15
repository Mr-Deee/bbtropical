"use client";

import Image from "next/image";
import Style from "../portfolio/portfolio.module.css";
import { useEffect, useRef } from "react";
import { useScroll } from "../ScrollProvider";


const Portfolioprojects = [
  {
    title: "Project One",
    description: "A cool project with amazing features.",
    image: "/images/img1.jpg",
  },
  {
    title: "Project Two",
    description: "Another awesome project to showcase skills.",
    image: "/images/img2.jpg",
  },
  {
    title: "Project Three",
    description: "A responsive project built with modern tech.",
    image: "/images/img3.jpg",
  },

  {
    title: "Project Three",
    description: "A responsive project built with modern tech.",
    image: "/images/img4.jpg",
  },

  {
    title: "Project Three",
    description: "A responsive project built with modern tech.",
    image: "/images/img3.jpg",
  },
  {
    title: "Project Three",
    description: "A responsive project built with modern tech.",
    image: "/images/img3.jpg",
  }, {
    title: "Project Three",
    description: "A responsive project built with modern tech.",
    image: "/images/img4.jpg",
  },
  {
    title: "Project Four",
    description: "An innovative project for modern web.",
    image: "/images/img4.jpg",
  },
];

export default function Portfolio() {

    const ref = useRef<HTMLElement | null>(null);
    const { register } = useScroll();
  
    useEffect(() => {
      register("portfolio1", ref.current);
    }, [register]);
  
  return (

    <section ref={ref} className={`${Style.section} ${Style.portfolio}`}>
      <h2 className={Style.sectionTitle}>Our Portfolio</h2>
      <div className={Style.projectsGrid}>
        {Portfolioprojects.map((Portfolioprojects, index) => (
          <div key={index} className={Style.projectCard}>
            <Image
              src={Portfolioprojects.image}
              alt={Portfolioprojects.title}
              width={500}
              height={300}
              className={Style.projectImg}
            />
            <div className={Style.projectOverlay}>
              <h3>{Portfolioprojects.title}</h3>
              <p>{Portfolioprojects.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
