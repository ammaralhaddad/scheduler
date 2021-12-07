import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {
  let dayClass = classNames("day-list__item", {
    "--selected": props.selected,
    "--full": !props.spots,
  });
  const formatSpots = (spots) => {
    return `${spots || "no"} spot${spots === 1 ? "" : "s"}`;
  };

  return (
    <li
      className={dayClass.replace(/ /g, "")}
      onClick={() => props.setDay(props.name)}
      data-testid="day"
    >
      <h2>{props.name}</h2>
      <h3>{formatSpots(props.spots)} remaining</h3>
    </li>
  );
}
