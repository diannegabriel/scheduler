import {useState, useEffect} from 'react';
import axios from 'axios';

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  console.log(state.day)

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then(all => {
      setState(prev => ({days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  const dayFinder = day => {
    const dayID = {
      Monday: 0,
      Tuesday: 1,
      Wednesday: 2,
      Thursday: 3,
      Friday: 4
    }
    return dayID[day]
  }

  return {
    state,
    setDay: day => setState({...state, day}),
    bookInterview: (id, interview) => {
      console.log(id, interview);
      const appointment = {
        ...state.appointments[id],
        interview: { ...interview }
      }
      const appointments = {
        ...state.appointments,
        [id]: appointment
      }
      const dayOfWeek = dayFinder(state.day)
      let day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek]
      }
      // state.appointments[id].interview ? (
      //   day = {
      //     ...state.days[dayOfWeek],
      //     spots: state.days[dayOfWeek.spots] - 1
      //   }
      // ) : (
      //   day = {
      //     ...state.days[dayOfWeek],
      //     spots: state.days[dayOfWeek.spots] - 1
      //   }
      // )
      if (!state.appointments[id].interview) {
        day = {
          ...state.days[dayOfWeek],
          spots: state.days[dayOfWeek].spots - 1
        }
      } else {
        day = {
          ...state.days[dayOfWeek],
          spots: state.days[dayOfWeek.spots]
        }
      }

      let days = state.days
      days[dayOfWeek] = day;

      return axios.put(`/api/appointments/${id}`, appointment)
        .then(() => {
          setState({
            ...state,
            appointments,
            days
          })
        })
    },
    cancelInterview: (id) => {
      const appointment = {
        ...state.appointments[id],
        interview: null
      };
      const appointments = {
        ...state.appointments,
        [id]: appointment
      };
      const dayOfWeek = dayFinder(state.day)

      const day = {
        ...state.days[dayOfWeek],
        spots: state.days[dayOfWeek].spots + 1
      }

      let days = state.days
      days[dayOfWeek] = day;
      return axios.delete(`/api/appointments/${id}`).then(() => {
        setState({ 
          ...state, 
          appointments, 
          days
        });
      });
    },
    deleteInterview: () => {
      return null;
    }
  }
}