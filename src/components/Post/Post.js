import React from "react";

export default function Post(props) {
  return (
    <>
  <h3>Hello {props.title}</h3>
  <p>{props.body}</p>
  </>
  )
}
