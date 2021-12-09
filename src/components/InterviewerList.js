import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

export default function InterviewerList(props) {
  const { interviewers, onChange, value } = props;
  const interviewersListItem = interviewers.map((interviewere) => {
    return (
      <InterviewerListItem
        key={interviewere.id}
        name={interviewere.name}
        avatar={interviewere.avatar}
        setInterviewer={(e) => onChange(interviewere.id)}
        selected={interviewere.id === value}
      />
    );
  });

  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{interviewersListItem}</ul>
    </section>
  );
}
