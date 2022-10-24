import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMessage } from "../redux/messages";

const Message = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMessage());
  }, [])

  const message = useSelector((state) => state.message);

  return (
    <div>
      <h1>{message.text}</h1>
    </div>
  )
};

export default Message;