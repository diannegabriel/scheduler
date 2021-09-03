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
        student: interview.student
      }
    }
  }
}