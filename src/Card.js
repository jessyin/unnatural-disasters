import React from "react";
import cx from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Card.css";

const Card = ({ description, name, type, iconOrImage }) => {
  const getIcon = () => {
    if (!iconOrImage) {
      return <div className="Card-blank" />;
    }

    if (typeof iconOrImage == "string") {
      return <img src={iconOrImage} className="Card-image" />;
    }

    return <FontAwesomeIcon icon={iconOrImage} size={"4x"} />;
  };
  return (
    <div className={cx("Card", name.replace(/#/g, ""))}>
      {type ? <FontAwesomeIcon icon={type} className="Card-type" size={"2x"} /> : null}
      <p className="Card-name">{name}</p>
      <div className="Card-content">
        {getIcon(iconOrImage)}
        <p className="Card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
