import React, { useState, useEffect, useRef } from "react";

const LazyLoadContent = ({ content, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the content is in view
        }
      },
      { threshold: 0.7 } // Trigger when 50% of the content is visible
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={contentRef}
      style={{
        padding: "1rem",
        backgroundColor: index % 2 === 0 ? "#ffff" : "#e0e0e0",
      }}
    >
      {isVisible && <>{content}</>}
    </div>
  );
};

export default LazyLoadContent;
