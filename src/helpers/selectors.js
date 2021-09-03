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
	
}