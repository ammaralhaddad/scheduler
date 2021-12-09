import React from "react";
import "components/Appointment/style.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment(props) {
  return (
    <>
      <Header time={props.time} />
      {props.interview ? (
        <Show student={props.student} interviewer={props.interviewer} />
      ) : (
        <Empty />
      )}
    </>
  );
}
