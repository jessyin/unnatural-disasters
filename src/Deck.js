import React, { useState } from "react";
import Card from "./Card";
import cx from "classnames";
import {
  NON_CUSTOM_CARDS,
  CUSTOM_CARDS,
  DEFAULT_CHAOS_CARDS,
  DEFAULT_ORDER_CARDS,
} from "./constants";

import "./Deck.css";

const Deck = ({ useDefault, chaosCards, orderCards }) => {
  const makeNonCustomCards = () => {
    return Object.values(NON_CUSTOM_CARDS).map((c) => {
      return Array(c.count)
        .fill(0)
        .map(() => <Card name={c.name} description={c.description} iconOrImage={c.icon} />);
    });
  };

  const makeChaosCards = () => {
    if (!useDefault) {
      return chaosCards.map((d) => (
        <Card
          name={CUSTOM_CARDS.CHAOS.name}
          description={d.description}
          type={d.type}
          iconOrImage={d.iconOrImage}
        />
      ));
    } else {
      return DEFAULT_CHAOS_CARDS.map((c) => {
        return Array(CUSTOM_CARDS.CHAOS.count)
          .fill(0)
          .map(() => (
            <Card
              name={CUSTOM_CARDS.CHAOS.name}
              description={c.description}
              type={c.type}
              iconOrImage={c.icon}
            />
          ));
      });
    }
  };

  const makeOrderCards = () => {
    if (!useDefault) {
      return orderCards.map((d) => (
        <Card
          name={CUSTOM_CARDS.ORDER.name}
          description={d.description}
          type={d.type}
          iconOrImage={d.iconOrImage}
        />
      ));
    } else {
      return DEFAULT_ORDER_CARDS.map((c) => {
        return Array(CUSTOM_CARDS.ORDER.count)
          .fill(0)
          .map(() => (
            <Card
              name={CUSTOM_CARDS.ORDER.name}
              description={c.description}
              type={c.type}
              iconOrImage={c.icon}
            />
          ));
      });
    }
  };

  return (
    <div className="Deck">
      {makeOrderCards()}
      {makeChaosCards()}
      {makeNonCustomCards()}
    </div>
  );
};

export default Deck;
