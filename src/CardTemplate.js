import React, { useState } from "react";
import Card from "./Card";
import cx from "classnames";
import {
  CUSTOM_CARDS,
  DEFAULT_CHAOS_CARDS,
  DEFAULT_ORDER_CARDS,
  NON_CUSTOM_CARDS,
} from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Deck from "./Deck";
import "./CardTemplate.css";

const NUM_CHAOS_ORDER_TYPES = 6;
const EMPTY_CARD = {
  description: "",
  iconOrImage: null,
  type: null,
};

const createEmptyCards = () => {
  return [...Array(NUM_CHAOS_ORDER_TYPES)].map(() => ({
    ...EMPTY_CARD,
  }));
};

const CardTemplate = () => {
  const [chaosCards, setChaosCards] = useState(createEmptyCards());
  const [orderCards, setOrderCards] = useState(createEmptyCards());
  const [useDefault, setUseDefault] = useState(true);

  const onOrderInputChange = (i, value) => {
    const newCards = [...orderCards];
    newCards[i].description = value;
    newCards[i].type = value ? DEFAULT_CHAOS_CARDS[i].type : null;
    setOrderCards(newCards);
  };

  const createOrderInputs = () => {
    return Array(NUM_CHAOS_ORDER_TYPES)
      .fill(0)
      .map((_, i) => (
        <input
          type="text"
          value={orderCards[i].description}
          onChange={(e) => onOrderInputChange(i, e.target.value)}
        ></input>
      ));
  };

  const onChaosInputChange = (i, value) => {
    const newCards = [...chaosCards];
    newCards[i].description = value;
    newCards[i].type = value ? DEFAULT_CHAOS_CARDS[i].type : null;
    setChaosCards(newCards);
  };

  const createChaosInputs = () => {
    return Array(NUM_CHAOS_ORDER_TYPES)
      .fill(0)
      .map((_, i) => (
        <input
          className="chaos"
          type="text"
          value={chaosCards[i].description}
          onChange={(e) => onChaosInputChange(i, e.target.value)}
        ></input>
      ));
  };

  const createInputs = () => {
    if (useDefault) {
      return null;
    }

    return (
      <div className="CardTemplate-createDeck">
        <div className="CardTemplate-numbers">
          <b>Category</b>
          {DEFAULT_CHAOS_CARDS.map((c, i) => (
            <FontAwesomeIcon icon={c.type} />
          ))}
        </div>
        <div className="CardTemplate-inputs">
          <b>HELPS</b>
          {createOrderInputs()}
        </div>
        <div className="CardTemplate-inputs">
          <b>HURTS</b>
          {createChaosInputs()}
        </div>
      </div>
    );
  };

  const cardSummary = () => {
    let orderSummary, chaosSummary, otherSummary;
    if (useDefault) {
      orderSummary = DEFAULT_ORDER_CARDS.map((c) => {
        return (
          <div className="CardTemplate-cardCount">
            <Card
              name={CUSTOM_CARDS.ORDER.name}
              description={c.description}
              type={c.type}
              iconOrImage={c.icon}
            />
            <h2>x {CUSTOM_CARDS.ORDER.count}</h2>
          </div>
        );
      });

      chaosSummary = DEFAULT_CHAOS_CARDS.map((c) => {
        return (
          <div className="CardTemplate-cardCount">
            <Card
              name={CUSTOM_CARDS.CHAOS.name}
              description={c.description}
              type={c.type}
              iconOrImage={c.icon}
            />
            <h2>x {CUSTOM_CARDS.CHAOS.count}</h2>
          </div>
        );
      });
    } else {
      orderSummary = orderCards.map(c => (
        <div className="CardTemplate-cardCount">
          <Card name={CUSTOM_CARDS.ORDER.name} description={c.description} iconOrImage={c.iconOrImage} type={c.type} />
          <h2>x {CUSTOM_CARDS.CHAOS.count}</h2>
        </div>
      ));

      chaosSummary = chaosCards.map(c => (
        <div className="CardTemplate-cardCount">
          <Card name={CUSTOM_CARDS.CHAOS.name} description={c.description} iconOrImage={c.iconOrImage} type={c.type} />
          <h2>x {CUSTOM_CARDS.CHAOS.count}</h2>
        </div>)
      );
    }

    otherSummary = Object.values(NON_CUSTOM_CARDS).map((c) => {
      return (
        <div className="CardTemplate-cardCount">
          <Card name={c.name} description={c.description} iconOrImage={c.icon} />
          <h2>x {c.count}</h2>
        </div>
      );
    });

    return (
      <div className="CardTemplate-summary">
        {orderSummary}
        {chaosSummary}
        {otherSummary}
      </div>
    );
  };

  return (
    <div className="CardTemplate">
      <div className="CardTemplate-buttons">
        <span
          className={cx("CardTemplate-button", useDefault ? "selected" : "")}
          onClick={() => setUseDefault(true)}
        >
          Default Deck
        </span>
        <span
          className={cx("CardTemplate-button", useDefault ? "" : "selected")}
          onClick={() => setUseDefault(false)}
        >
          Create your own deck
        </span>
      </div>
      {useDefault ? (
        <p>
          Use our premade deck.{" "}
          <a href="#" onClick={() => window.print()}>
            Click here to print!
          </a>
        </p>
      ) : (
        <p>
          Think about what actions you can do to <b>help</b> the enviornment, and what actions you
          do that may <b>hurt</b> the enviornment... <br></br> When you are done,{" "}
          <a href="#" onClick={() => window.print()}>
            click here to print!
          </a>{" "}
          Then draw your own graphics to each card.
        </p>
      )}
      {createInputs()}
      {cardSummary()}
      <Deck useDefault={useDefault} chaosCards={chaosCards} orderCards={orderCards} />
    </div>
  );
};

export default CardTemplate;
