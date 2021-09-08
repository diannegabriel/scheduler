import { useState, useEffect } from "react";
import axios from "axios";
import { getDay } from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: [],
  });

  // API data will be requested when page is rendered, controlled by useEffect
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    // PUT request is used so we can update an appointment
    return axios.put(`/api/appointments/${id}`, appointment).then(() => {
      setState({
        ...state,
        appointments,
      });
      updateSpots(appointments);
    });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`/api/appointments/${id}`).then(() => {
      setState({
        ...state,
        appointments,
      });
      updateSpots(appointments);
    });
  };

  const deleteInterview = () => {
    return null;
  };

  // Finds the current day
  const findDay = getDay(state.day);

  // updateSpots will indicate how many spots are left
  const updateSpots = (appointments) => {

    // Finds the day the user selected
    const currentDay = state.days.find(
      (dayObject) => dayObject.name === state.day
    );

    // Counts the number of spots for that specific day
    // 5 (original spots) minus appointments' length
    const spots = 5 - currentDay.appointments.filter(
      (appointment) => appointments[appointment].interview
      ).length;
    
    // Sets the updated array of days
    const days = [...state.days];
    days[findDay] = { ...days[findDay], spots };
    setState((prev) => ({ ...prev, days }));
  };
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    deleteInterview,
  };
}
