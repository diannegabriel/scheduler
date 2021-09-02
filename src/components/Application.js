import React, { useEffect, useState } from "react";
import DayList from "./DayList";
import { getAppointmentsForDay } from "helpers/selectors";

import "components/Appointment"
import Appointment from "components/Appointment";
import "components/Application.scss";
import axios from "axios";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const setDay = day => setState({...state, day})
  // const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    // axios.get("/api/days")
    //   .then(res => {
    //     setDays(res.data);
    //   })
    Promise.all([
			axios.get("/api/days"),
			axios.get("/api/appointments"),
			axios.get("/api/interviewers")
		]).then(all => {
			setState(prev => ({days: all[0].data, appointments: all[1].data}))
		});
  }, [])

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
        {dailyAppointments.map((appointment) => {
          return <Appointment key={appointment.id} {...appointment} />
          }
        )}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
