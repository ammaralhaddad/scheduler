import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  // function for booking a new interview

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const day = updateSpots(state, appointments);

    return axios
      .put(`/api/appointments/${id}`, { interview: appointments[id].interview })
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments: appointments,
          days: day,
        }));
      });
  };

  // cancel appointement

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const day = updateSpots(state, appointments);
    return axios
      .delete(`/api/appointments/${id}`, { interview: null })
      .then(() => {
        setState((prev) => ({
          ...prev,
          appointments: appointments,
          days: day,
        }));
      });
  }

  const updateSpots = (state, appointments) => {
    const days = state.days.map((day) => {
      const newSpot = day.appointments.reduce((prev, ID) => {
        if (appointments[ID].interview === null) {
          return prev + 1;
        } else {
          return prev;
        }
      }, 0);
      if (state.day === day.name) {
        return { ...day, spots: newSpot };
      } else {
        return { ...day };
      }
    });
    return days;
  };

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

  return {
    state,
    setState,
    setDay,
    bookInterview,
    cancelInterview,
    updateSpots,
  };
}
