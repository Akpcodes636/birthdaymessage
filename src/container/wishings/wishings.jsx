import  Messages  from "../../../message.js";
import Transition from "../../elements/Transition/transition.jsx";

const Wishings = () => {
  console.log(typeof Messages);
  console.log(Messages);
  return (
    <div className="wishings-div">
      {Messages.map((message) => {
        return (
          <Transition
            key={message.id}
            id={message.id}
            start={message.start}
            message={message.message}
            delay={message.delay}
          />
        );
      })}
    </div>
  );
};

export default Wishings;
