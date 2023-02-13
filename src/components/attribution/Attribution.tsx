import React from "react";
import "./Attribution.scss";
type Props = {};

const Attribution = (props: Props) => {
  return (
    <div className="attribution">
      Challenge by&nbsp;
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="#">&nbsp;Görkem Karamolla</a>.
    </div>
  );
};
export default Attribution;
