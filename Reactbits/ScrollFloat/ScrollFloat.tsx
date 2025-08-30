'use client'

import React, { useEffect, useMemo, useRef, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollFloat.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "top bottom-=50%",
  scrollEnd = "bottom bottom+=140%",
  stagger = 0.5
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  // Extract text content from children, handling both strings and React elements
  const extractTextContent = (node: ReactNode): string => {
    if (typeof node === "string") {
      return node;
    }
    if (typeof node === "number") {
      return node.toString();
    }
    if (React.isValidElement(node)) {
      return extractTextContent(node.props.children);
    }
    if (Array.isArray(node)) {
      return node.map(extractTextContent).join("");
    }
    return "";
  };

  const splitText = useMemo(() => {
    const text = extractTextContent(children);
    console.log("Extracted text:", text); // Debug log
    return text.split("").map((char, index) => (
      <span className="char" key={index}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    const charElements = el.querySelectorAll(".char");
    console.log("Found char elements:", charElements.length); // Debug log

    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.trigger === el) {
        trigger.kill();
      }
    });

    if (charElements.length === 0) return;

    gsap.fromTo(
      charElements,
      {
        willChange: "opacity, transform",
        opacity: 0,
        yPercent: 20,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: "50% 50%"
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true,
          markers: true, // Add this temporarily to debug scroll trigger positions
          onUpdate: (self) => {
            console.log("ScrollTrigger progress:", self.progress); // Debug log
          }
        },
      }
    );

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
    };
  }, [
    children, // Add children to dependencies
    scrollContainerRef,
    animationDuration,
    ease,
    scrollStart,
    scrollEnd,
    stagger
  ]);

  return (
    <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
      <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
    </h2>
  );
};

export default ScrollFloat;