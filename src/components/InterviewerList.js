import React from "react";
import InterviewerListItem from "components/InterviewerListItem";
import "components/InterviewerList.scss"

export default function InterviewerList(props) {
  const interviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        spots={interviewer.spots}
        selected={interviewer.name === props.interviewer}
        setInterviewer={() => props.setinterviewer(interviewer.id)}
      />
    )
  })
  return interviewers;
}