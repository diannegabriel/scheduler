// Returns an array of all the appointments for the day
export function getAppointmentsForDay(state, day) {
  const result = [];
  let appointmentArray = [];
  for (const selectedDay of state.days) {
    if (selectedDay.name === day) {
      appointmentArray = selectedDay.appointments;
    }
  }
  for (const appointment of appointmentArray) {
    result.push(state.appointments[appointment]);
  }
  return result;
}

// Returns an object with the interview, includes student and interviewer
export function getInterview(state, interview) {
  for (const interviewer in state.interviewers) {
    if (!interview) {
      return null;
    }
    if (interview.interviewer === state.interviewers[interviewer].id) {
      return {
        interviewer: {
          avatar: state.interviewers[interviewer].avatar,
          id: state.interviewers[interviewer].id,
          name: state.interviewers[interviewer].name,
        },
        student: interview.student,
      };
    }
  }
}

// Returns an array with all the interviewers assigned for that day
export function getInterviewersForDay(state, day) {
  const result = [];
  let interviewArray = [];
  for (let selectDay of state.days) {
    if (selectDay.name === day) {
      interviewArray = selectDay.interviewers;
    }
  }
  if (interviewArray.length < 1) {
    return result;
  }
  for (let interview of interviewArray) {
    state.interviewers[interview] && result.push(state.interviewers[interview]);
  }
  return result;
}

// Returns an integer as the id of that specific day
export function getDay(day) {
  const dayID = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
  };
  return dayID[day];
}
