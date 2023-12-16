

const Message = ({ id, message }) => {
  return (
    <div id={id} className={"message-div message-div-" + id}>
      <div className="message">{message}</div>
    </div>
  );
};

export default Message;
