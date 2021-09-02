import React, { useEffect, useState } from "react";
import DayList from "./DayList";

import "components/Appointment"
import Appointment from "components/Appointment";
import "components/Application.scss";
import axios from "axios";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      }
    }
  },
  {
    id: 3,
    time: "2pm",
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Dianne",
      interviewer: {
        id: 1,
        name: "Sven Jones", 
        avatar: "https://i.imgur.com/twYrpay.jpg"
      }
    }
  },
  {
    id: 5,
    time: "4pm",
    interview: {
      student: "Cristina",
      interviewer: {
        id: 1,
        name: "Cohana Roy", 
        avatar: "https://i.imgur.com/FK8V841.jpg"
      }
    }
  },
];

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  const setDay = day => setState({...state, day})
  const setDays = days => setState(prev => ({ ...prev, days }));

  useEffect(() => {
    axios.get("/api/days")
      .then(res => {
        setDays(res.data);
      })
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
        {appointments.map((appointment) => {
          return <Appointment key={appointment.id} {...appointment} />
          }
        )}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
