import React, { useState, useEffect } from "react";

import TypingDot from "../TypingDot/typingdot.jsx";
import Message from "../../container/message/message.jsx";

const Transition = (props) => {
  const [showTyping, setShowTyping] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const [date, setDate] = useState(new Date().getTime());

  useEffect(() => {
    const timerID = setInterval(() => {
      setDate(new Date().getTime());
    }, 100);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  useEffect(() => {
    setShowTyping(date < props.start + 1800);

    // Show the message when typing is complete
    if (!showTyping) {
      setShowMessage(true);
    }
  }, [date, props.start, showTyping]);

  return (
    <div className="transition">
      {showTyping && <TypingDot />}
      {showMessage && <Message id={props.id} message={props.message} />}
    </div>
  );
};

export default Transition;
