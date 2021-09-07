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
  const setDay = (day) => setState({ ...state, day });
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
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
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
  const findDay = getDay(state.day);
  const updateSpots = (appointments) => {
    const currentDay = state.days.find(
      (dayObject) => dayObject.name === state.day
    );
    const spots =
      5 -
      currentDay.appointments.filter(
        (appointment) => appointments[appointment].interview
      ).length;
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
