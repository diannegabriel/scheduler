import React, { useEffect, useState } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "hooks/useApplicationData";
import "components/Appointment"
import "components/Application.scss";

export default function Application(props) {
  // const [state, setState] = useState({
  //   day: "Monday",
  //   days: [],
  //   appointments: {},
  //   interviewers: []
  // });

  // const setDay = day => setState({...state, day}) 

  // useEffect(() => {
  //   Promise.all([
	// 		axios.get("/api/days"),
	// 		axios.get("/api/appointments"),
	// 		axios.get("/api/interviewers")
	// 	]).then(all => {
	// 		setState(prev => ({days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
	// 	});
  // }, [])

  // const bookInterview = (id, interview) => {
  //   console.log(id, interview);
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: { ...interview }
  //   }
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   }
  //   return axios.put(`/api/appointments/${id}`, appointment)
  //     .then(() => {
  //       setState({
  //         ...state,
  //         appointments
  //       })
  //     })
  // }

  // const cancelInterview = (id) => {
  //   const appointment = {
  //     ...state.appointments[id],
  //     interview: null
  //   };
  //   const appointments = {
  //     ...state.appointments,
  //     [id]: appointment
  //   };
  //   return axios.delete(`/api/appointments/${id}`).then(response => {
  //     setState({ ...state, appointments });
  //   });
  // }

  // const deleteInterview = () => {
  //   return null;
  // }

  const {
    state,
    setDay,
    bookInterview,
    cancelInterview,
    deleteInterview
  } = useApplicationData();

  const appointments = getAppointmentsForDay(state, state.day)
  const schedule = appointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
    const interviewers = getInterviewersForDay(state, state.day);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        deleteInterview={deleteInterview}
      />
    );
  });

  return (
    <main className="layout">
      <section className="sidebar">
      <img
        className="sidebar--centered"
        src="images/logo.png"
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
        <DayList
          days={state.days}
          day={state.day}
          setDay={setDay}
        />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
