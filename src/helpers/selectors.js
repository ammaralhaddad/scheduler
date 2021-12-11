export function getAppointmentsForDay(state, day) {
  const dayObject = state.days.filter((element) => element.name === day);
  if (dayObject.length === 0) {
    return [];
  }
  const appointmentIDs = dayObject[0].appointments;
  const appointmentDetails = appointmentIDs.map((id) => state.appointments[id]);
  return appointmentDetails;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerID = interview.interviewer;
  const interviewerObject = state.interviewers[interviewerID];

  return { ...interview, interviewer: interviewerObject };
}

export function getInterviewersForDay(state, day) {
  const dayObject = state.days.filter((element) => element.name === day);
  if (dayObject.length === 0) {
    return [];
  }
  const interview = [];
  dayObject[0].interviewers.forEach((interviewer) => {
    interview.push(state.interviewers[interviewer]);
  });
  return interview;
}
