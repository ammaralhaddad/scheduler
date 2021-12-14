import React from "react";
import DayList from "./DayList";
import Appointment from "./Appointment";
import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "../helpers/selectors";
import useApplicationData from "hooks/useApplicationData";
import "components/Application.scss";

export default function Application(props) {
  const { state, setDay, bookInterview, cancelInterview } =
    useApplicationData();

  const dailyAppointments = getAppointmentsForDay(
    { days: state.days, appointments: state.appointments },
    state.day
  );

  const interviewers = getInterviewersForDay(
    { days: state.days, interviewers: state.interviewers },
    state.day
  );

  const appointmentArray = dailyAppointments.map((appointmentItem) => {
    const interview = getInterview(state, appointmentItem.interview);
    console.log(interview);
    return (
      <Appointment
        key={appointmentItem.id}
        id={appointmentItem.id}
        time={appointmentItem.time}
        interview={interview}
        interviewers={interviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
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
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointmentArray}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}
