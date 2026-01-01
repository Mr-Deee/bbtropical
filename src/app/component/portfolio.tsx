"use client";

import Image from "next/image";
import Style from "../portfolio/portfolio.module.css";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "../ScrollProvider";

const Portfolioprojects = [
  {
    title: "Import Of Building And Electrical Materials ",
    description: "We provide world class building materials.",
    details:
      "We supply cement, steel, aggregates, and premium construction materials across the country.",
    images: [
      "/images/elect.jpg",
      "/images/buildingMaterials4.jpg",
      "/images/electricalMaterials1.jpg",
    ],
  },


  {
    title: "Archetectural Drawings",
    description: "Highly Trained visionary archetects for your architectural drawings.",
    details:
      "We supply cement, steel, aggregates, and premium construction materials across the country.",
    images: [
      "/images/Archetectural Drawing.jpg",
      "/images/Ach2.jpg",
      "/images/ArchitecturalDrawings4.jpg",
    ],
  },


  {
    title: "Supply Of Building Materials",
    description: "We provide world class building materials.",
    details:
      "We supply cement, steel, aggregates, and premium construction materials across the country.",
    images: [
      "/images/buildingsupplies.jpg",
      "/images/buildingMaterials4.jpg",
      "/images/woodplanks.jpg",
    ],
  },
  {
    title: "Road And Building Construction",
    description: "We build state of the art roads and buildings.",
    details:
      "Our construction projects meet international safety and durability standards.",
    images: ["/images/robcons.jpg", "/images/construction.jpg"],
  },
  {
    title: "Electrical And Civil Engineering",
    description: "A responsive project built with modern tech.",
    details:
      "We handle electrical installations, civil works, and infrastructure projects.",
    images: ["/images/EC.jpg", "/images/electricalEngineering.jpg"],
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
               <button
                   key={i}
                  className={`${Style.dot} ${i === imageIndex ? Style.activeDot : ""}`}
                   onClick={() => setImageIndex(i)}
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