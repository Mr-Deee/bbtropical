"use client";

import Image from "next/image";
import Style from "../portfolio/portfolio.module.css";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "../ScrollProvider";

const Portfolioprojects = [
  {
    title: "Supply Of Building Materials",
    description: "We provide world class building materials.",
    details:
      "We supply cement, steel, aggregates, and premium construction materials across the country.",
    images: [
      "/images/buildingsupplies.jpg",
      "/images/buildingsupplies2.jpg",
      "/images/buildingsupplies3.jpg",
    ],
  },
  {
    title: "Road And Building Construction",
    description: "We build state of the art roads and buildings.",
    details:
      "Our construction projects meet international safety and durability standards.",
    images: ["/images/robcons.jpg", "/images/robcons2.jpg"],
  },
  {
    title: "Electrical And Civil Engineering",
    description: "A responsive project built with modern tech.",
    details:
      "We handle electrical installations, civil works, and infrastructure projects.",
    images: ["/images/EC.jpg", "/images/EC2.jpg"],
  },
];


export default function Portfolio() {
  const ref = useRef<HTMLElement | null>(null);
  const { register } = useScroll();

  const [activeProject, setActiveProject] = useState<any | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    register("portfolio1", ref.current);
  }, [register]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      // swipe left
      setImageIndex((i) =>
        i < activeProject.images.length - 1 ? i + 1 : i
      );
    } else if (diff < -50) {
      // swipe right
      setImageIndex((i) => (i > 0 ? i - 1 : i));
    }
    startX.current = null;
  };

  return (
    <>
      <section ref={ref} className={`${Style.section} ${Style.portfolio}`}>
        <h2 className={Style.sectionTitle}>Our Portfolio</h2>

        <div className={Style.projectsGrid}>
          {Portfolioprojects.map((project, index) => (
            <div
              key={index}
              className={Style.projectCard}
              onClick={() => {
                setActiveProject(project);
                setImageIndex(0);
              }}
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={500}
                height={300}
                className={Style.projectImg}
              />
                <div className={Style.cardLabel}>Tap to view</div>

              <div className={Style.projectOverlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      {activeProject && (
        <div className={Style.modalBackdrop} onClick={() => setActiveProject(null)}>
          <div
            className={Style.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={Style.closeBtn}
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            {/* Swipeable stack */}
            <div
              className={Style.swipeContainer}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <Image
                src={activeProject.images[imageIndex]}
                alt={activeProject.title}
                fill
                className={Style.swipeImage}
              />
            </div>

            <div className={Style.modalContent}>
              <h3>{activeProject.title}</h3>
              <p>{activeProject.details}</p>

              <div className={Style.dots}>
                {activeProject.images.map((_: any, i: number) => (
                  <span
                    key={i}
                    className={i === imageIndex ? Style.activeDot : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}