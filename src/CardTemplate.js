import React, { useState } from "react";
import Deck from "./Deck";
import cx from "classnames";
import "./CardTemplate.css";
import { CUSTOM_CARDS, DEFAULT_CHAOS_CARDS } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NUM_CHAOS_ORDER_TYPES = 6;
const EMPTY_CARD = {
  description: "",
  iconOrImage: null,
  type: null,
};

const createEmptyCards = () => {
  return [...Array(NUM_CHAOS_ORDER_TYPES * CUSTOM_CARDS.ORDER.count)].map(() => ({
    ...EMPTY_CARD,
  }));
};

const CardTemplate = () => {
  const [chaosCards, setChaosCards] = useState(createEmptyCards());
  const [orderCards, setOrderCards] = useState(createEmptyCards());
  const [useDefault, setUseDefault] = useState(true);

  const onOrderInputChange = (index, value) => {
    const newCards = [...orderCards];
    for (let i = 0; i < CUSTOM_CARDS.ORDER.count; i++) {
      const x = index * CUSTOM_CARDS.ORDER.count + i;
      newCards[x].description = value;
      newCards[x].type = value ? DEFAULT_CHAOS_CARDS[index].type : null;
    }
    setOrderCards(newCards);
  };

  const createOrderInputs = () => {
    return Array(NUM_CHAOS_ORDER_TYPES)
      .fill(0)
      .map((_, i) => (
        <input
          type="text"
          value={orderCards[i * 4].description}
          onChange={(e) => onOrderInputChange(i, e.target.value)}
        ></input>
      ));
  };

  const onChaosInputChange = (index, value) => {
    const newCards = [...chaosCards];
    for (let i = 0; i < CUSTOM_CARDS.CHAOS.count; i++) {
      const x = index * CUSTOM_CARDS.CHAOS.count + i;
      newCards[x].description = value;
      newCards[x].type = value ? DEFAULT_CHAOS_CARDS[index].type : null;
    }
    setChaosCards(newCards);
  };

  const createChaosInputs = () => {
    return Array(NUM_CHAOS_ORDER_TYPES)
      .fill(0)
      .map((_, i) => (
        <input
          className="chaos"
          type="text"
          value={chaosCards[i * 4].description}
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
        <p>Use the default deck!</p>
      ) : (
        <p>
          Think about what actions you can do to <b>help</b> the enviornment, and what actions you
          do that may <b>hurt</b> the enviornment...
        </p>
      )}
      {createInputs()}
      <Deck useDefault={useDefault} chaosCards={chaosCards} orderCards={orderCards} />
    </div>
  );
};

export default CardTemplate;
