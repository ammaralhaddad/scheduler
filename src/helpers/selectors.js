export function getAppointmentsForDay(state, day) {
  const dayObject = state.days.filter((element) => element.name === day);
  if (dayObject.length === 0) {
    return [];
  }
  const appointmentIDs = dayObject[0].appointments;
  const appointmentDetails = appointmentIDs.map((id) => state.appointments[id]);
  return appointmentDetails;
}
