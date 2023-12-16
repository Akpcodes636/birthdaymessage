import React, { useState, useEffect, useRef } from "react";
import Message from "../../container/message/message";
import TypingDot from "../TypingDot/typingdot";


const Transition = ({ id, message, delay, threshold = 0.5 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setInView(entries[0].isIntersecting);
      },
      { threshold }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <div className="transition" ref={ref}>
      {inView && (
        <>
          <div
            style={{
              animation: `fade-in ${delay}s ease-in-out`,
              opacity: inView ? 1 : 0,
              pointerEvents: inView ? "auto" : "none",
            }}
          >
            <TypingDot />
          </div>
          <div
            style={{
              animation: `bounce-left ${delay}s ease-in-out`,
              opacity: inView ? 1 : 0,
              pointerEvents: inView ? "auto" : "none",
            }}
          >
            <Message id={id} message={message} />
          </div>
        </>
      )}
    </div>
  );
};

export default Transition;