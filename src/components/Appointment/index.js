import React from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";
import useVisualMode from "hooks/useVisualMode";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVE = "SAVE";
  const CONFIRM = "CONFIRM";
  const DELETE = "DELETE";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVE);
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(() => {
        transition(ERROR_SAVE, true)
      })
  }

  const deletes = () => {
    transition(DELETE)
    props.cancelInterview(props.id).then(() => transition(EMPTY))
  }

  const confirm = () => {
    transition(CONFIRM);
    props.deleteInterview();
  }

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === CREATE && (
        <Form
          onCancel={() => back()}
          interviewers={props.interviewers}
          onSave={save}
          onDelete={confirm}
        />
      )}
      {mode === CONFIRM && (
        <Confirm 
        message="Are you sure you would like to delete"
        onConfirm={deletes} 
        onCancel={() => back()}/>
      )}
      {mode === DELETE && <Status message="Deleting" />}
      {mode === EDIT && (
        <Form
        interviewers={props.interviewers}
        name={props.interview.student}
        interviewer={props.interview.interviewer.id}
        onCancel={() => back()}
        onSave={save}
				/>
      )}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === ERROR_SAVE && <Error message="Could not save appointment" onClose={() => back()}/>}
      {mode === SAVE && <Status message="Saving" />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onEdit={() => transition(EDIT)}
          onDelete={() => transition(CONFIRM)}
        />
      )}
    </article>
  )
}