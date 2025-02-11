import React, { useState, useEffect, useRef } from "react";
// import bgTitle from '..//assets/img/bg-title.png';

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
      { threshold: 0.9 } // Trigger when 50% of the content is visible
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
        backgroundColor: index % 2 !== 0 ? "#ffff" : "rgb(250 250 250)",
      }}
      className={content.className}
    >
      {isVisible &&
        <div className="text-center">
          {
            content.title &&
            <div className="title">
              {/* <div>
                <img src={bgTitle} />
              </div> */}
              <u>{content.title}
              </u>
            </div>
          }
          {content.template}
        </div>}
    </div>
  );
};

export default LazyLoadContent;
