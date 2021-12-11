import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem(props) {
  const { name, spots, onChange, selected } = props;

  const formatSpots = (spots) => {
    if (spots === 0) {
      return "no spots remaining";
    }

    if (spots === 1) {
      return "1 spot remaining";
    }

    return `${spots} spots remaining`;
  };

  const dayListItemClasses = classNames({
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0,
  });

  return (
    <li onClick={onChange} className={dayListItemClasses}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots(spots)}</h3>
    </li>
  );
}
