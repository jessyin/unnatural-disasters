import React, { useState } from "react";
import Card from "./Card";
import { CUSTOM_CARDS, DEFAULT_CHAOS_CARDS, DEFAULT_ORDER_CARDS, NON_CUSTOM_CARDS } from "./constants";
import cx from "classnames";
import recallImg from "./images/recall_deal.png";
import startImg from "./images/start.png";
import firstPlayerImg from "./images/first_player.png";
import gameplayImg from "./images/gameplay.png";
import neutralizeImg from "./images/neutralize.png";
import skipImg from "./images/skip.png";
import attackImg from "./images/attack.png";
import recycleImg from "./images/recycle.png";
import disasterImg from "./images/disaster.png";
import reliefImg from "./images/relief.png";
import spinnerImg from "./images/spinner.png";

import "./Instructions.css";

const Instructions = () => {
  const [ showOnline, setShowOnline ] = useState(false);

  const instructions = () => {
    return (
      <>
        <div className="Instructions-section">
          <div className="Instructions-section-title">SETUP</div>
          <div className="Instructions-section-content">
            <p>
              You will need the original or your custom-made <i>Un-Natural Disasters</i> deck of cards, and a 1-8 numbered spinner or an 8-sided die.
              You can find and print these game pieces on the <u>Game Pieces</u> tab.
            </p>
            <ol>
              <li>
                Shuffle the <b>Chaos</b>, <b>Order</b>, and <b>Special</b> (Favor, Forecast, Nope)
                cards together.
              </li>
              <li>Each player takes 5 cards from the shuffled deck.</li>
              <li>
                Deal 1 <b>Relief Pack</b> card to each player
              </li>
              <li>
                Shuffle all the remaining <b>Relief Pack</b> and <b>Natural Disaster</b> cards into
                the deck.
              </li>
              <li>
                Each player spins the spinner/rolls the dice. The player with the highest roll goes
                first.
              </li>
            </ol>
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">ON YOUR TURN</div>
          <div className="Instructions-section-content">
            <p>
              <b>On your turn:</b> You can play as many <b>Chaos</b> or <b>Special</b> cards as you
              want. You can also play at most 2 <b>Order</b> cards per turn. Or, you can choose to
              play no cards.
            </p>
            <b>Special Chaos/Order Actions:</b>
            <ul>
              <li>
                <i>Neutralize</i> - Placing a <b>Chaos</b> card will "neutralize" an <b>Order</b>{" "}
                card of the same symbol in the environemnt, and vice versa. Discard both cards.
              </li>
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[0].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[0].icon}
                type={DEFAULT_CHAOS_CARDS[0].type}
              />
              <Card
                name={CUSTOM_CARDS.ORDER.name}
                description={DEFAULT_ORDER_CARDS[0].description}
                iconOrImage={DEFAULT_ORDER_CARDS[0].icon}
                type={DEFAULT_ORDER_CARDS[0].type}
              />
              <li>
                <i>Skip</i> - Placing <b>2 of the same Chaos</b> card allows you to skip drawing a
                card at the end of your turn.
              </li>
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[1].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[1].icon}
                type={DEFAULT_CHAOS_CARDS[1].type}
              />
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[1].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[1].icon}
                type={DEFAULT_CHAOS_CARDS[1].type}
              />
              <li>
                <i>Attack</i> - Placing <b>3 different Chaos</b> cards allows you to skip drawing a
                card at the end of your turn. The player who does this action must also do a gesture
                or reaction, and the{" "}
                <b>last player to copy the gesture or action draws an extra 3 cards.</b>
              </li>
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[0].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[0].icon}
                type={DEFAULT_CHAOS_CARDS[0].type}
              />
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[1].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[1].icon}
                type={DEFAULT_CHAOS_CARDS[1].type}
              />
              <Card
                name={CUSTOM_CARDS.CHAOS.name}
                description={DEFAULT_CHAOS_CARDS[2].description}
                iconOrImage={DEFAULT_CHAOS_CARDS[2].icon}
                type={DEFAULT_CHAOS_CARDS[2].type}
              />
              <li>
                <i>Recycle</i> - Placing <b>2 of the same Order</b> card allows you to take one of
                the top 5 cards from the discard pile. These Order cards are{" "}
                <b>immediately discarded</b>
              </li>
              <Card
                name={CUSTOM_CARDS.ORDER.name}
                description={DEFAULT_ORDER_CARDS[1].description}
                iconOrImage={DEFAULT_ORDER_CARDS[1].icon}
                type={DEFAULT_ORDER_CARDS[1].type}
              />
              <Card
                name={CUSTOM_CARDS.ORDER.name}
                description={DEFAULT_ORDER_CARDS[1].description}
                iconOrImage={DEFAULT_ORDER_CARDS[1].icon}
                type={DEFAULT_ORDER_CARDS[1].type}
              />
            </ul>
            <b>Special Card Actions: Discard after use</b>
            <ul>
              <li>
                <i>Favor</i> - ask another player for a card in their hand. They may choose any card
                in their hand to give to you.
              </li>
              <li>
                <i>Forecast</i> - take a peek the top three cards in the deck.
              </li>
              <li>
                <i>Nope</i> - stops the action of another player. Cannot be used on natural disaster
                cards.
              </li>
            </ul>
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">END YOUR TURN</div>
          <div className="Instructions-section-content">
            <b>To end your turn:</b> draw a card from the deck.
            <p>
              If you draw a <b>Natural Disaster</b>, you must reveal the card in the environment,
              and spin the spinner/roll the dice.
            </p>
            <Card
              name={NON_CUSTOM_CARDS.DISASTER.name}
              description={NON_CUSTOM_CARDS.DISASTER.description}
              iconOrImage={NON_CUSTOM_CARDS.DISASTER.icon}
            />
            <ul>
              <li>
                If you get a number <i>more</i> than the <b>Chaos Counter</b> (Chaos Counter =
                number of <b>Chaos</b> cards in the environment + 1), then you are{" "}
                <span style={{ color: "var(--green)" }}>safe</span>.
              </li>
              <li>
                If you get <i>less than or equal</i> to the number of <b>Chaos</b> cards in the
                enviornment + 1, then you are <span style={{ color: "var(--red)" }}>hit</span> by
                the <b>Natural Disaster</b>.
              </li>
            </ul>
            <p>
              When <span style={{ color: "var(--red)" }}>hit</span> by the <b>Natural Disaster</b>,
              if you or another player use a <b>Relief Pack</b> card, you survive. If no{" "}
              <b>Relief Pack</b> card is used, then you are out of the game. Discard the <b>Natural Disaster</b> and <b>Relief Pack</b> cards after use.
            </p>
            <Card
              name={NON_CUSTOM_CARDS.RELIEF.name}
              description={NON_CUSTOM_CARDS.RELIEF.description}
              iconOrImage={NON_CUSTOM_CARDS.RELIEF.icon}
            />
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">WIN STATE</div>
          <div className="Instructions-section-content">
            <p>Collectively make it to the end of the game (no more cards left in the draw pile)</p>
            <p>- OR -</p>
            <p>
              Be the last one standing (everyone else has lost due to drawing natural disaster
              cards)
            </p>
          </div>
        </div>
      </>
    );
  }

  const onlineInstructions = () => {
    return (
      <>
        <div className="Instructions-section">
          <div className="Instructions-section-title">SETUP</div>
          <div className="Instructions-section-content">
            <p>
              Play on this <a href="https://playingcards.io/d72tb7">link</a> with zoom opened on the
              side. Try to organize your screen to see both zoom and the playingcards.io interface
              at the same time:
            </p>
            <div
              style={{
                width: "400px",
                height: "250px",
                border: "2px solid var(--dark)",
                display: "flex",
                color: "var(--light)",
                lineHeight: "250px",
                textAlign: "center",
              }}
            >
              <div style={{ width: "75%", height: "100%", backgroundColor: "var(--green)" }}>
                playingcards.io
              </div>
              <div style={{ width: "25%", height: "100%", backgroundColor: "var(--blue)" }}>
                zoom
              </div>
            </div>
            <ol>
              <li>
                Click on the <b>Recall all Cards</b> button, then the <b>Deal</b> button. This will
                give you 5 cards from the deck, 1 <b>Relief Package</b> card, and disperse the{" "}
                <b>Natural Disaster</b> cards into the main deck
              </li>
              <img src={recallImg} height="200px" />
              <li>
                On the left sidebar, you will see the number of players and the small head next to
                the number denotes which color you are.
              </li>
              <li>
                Click the <b>Start</b> button. The player with the number displayed next to the{" "}
                <b>Start</b> button will go first.
              </li>
              <div
                style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}
              >
                <img src={startImg} height="100px" />
                <img src={firstPlayerImg} height="200px" />
              </div>
            </ol>
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">ON YOUR TURN</div>
          <div className="Instructions-section-content">
            <p>
              <b>On your turn:</b> You can play as many <b>Chaos</b> or <b>Special</b> cards as you
              want. You can also play at most 2 <b>Order</b> cards per turn. Place cards in{" "}
              <i>The Environment</i>. Or, you can choose to play no cards.
            </p>
            <img src={gameplayImg} height="200px" />
            <br></br>
            <b>Special Chaos/Order Actions:</b>
            <ul>
              <li>
                <i>Neutralize</i> - Placing a <b>Chaos</b> card will "neutralize" an <b>Order</b>{" "}
                card of the same symbol in the environemnt, and vice versa. Discard both cards.
              </li>
              <img src={neutralizeImg} height="200px" />
              <li>
                <i>Skip</i> - Placing <b>2 of the same Chaos</b> card allows you to skip drawing a
                card at the end of your turn.
              </li>
              <img src={skipImg} height="200px" />
              <li>
                <i>Attack</i> - Placing <b>3 different Chaos</b> cards allows you to skip drawing a
                card at the end of your turn. The player who does this action must also do a gesture
                or reaction, and the{" "}
                <b>last player to copy the gesture or action draws an extra 3 cards.</b>
              </li>
              <img src={attackImg} height="200px" />
              <li>
                <i>Recycle</i> - Placing <b>2 of the same Order</b> card allows you to take one of
                the top 5 cards from the discard pile. These Order cards are{" "}
                <b>immediately discarded</b>
              </li>
              <img src={recycleImg} height="200px" />
            </ul>
            <b>Special Card Actions: Discard after use</b>
            <ul>
              <li>
                <i>Favor</i> - ask another player for a card in their hand. They may choose any card
                in their hand to give to you.
              </li>
              <li>
                <i>Forecast</i> - take a peek the top three cards in the deck.
              </li>
              <li>
                <i>Nope</i> - stops the action of another player. Cannot be used on natural disaster
                cards.
              </li>
            </ul>
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">END YOUR TURN</div>
          <div className="Instructions-section-content">
            <b>To end your turn:</b> draw a card from the deck, and adjust the counter if needed.
            <p>
              If you draw a <b>Natural Disaster</b>, you must reveal the card in the environment,
              and spin the spinner.
            </p>
            <div>
              <img src={disasterImg} height="200px" />
              <img src={spinnerImg} height="200px" />
            </div>
            <ul>
              <li>
                If you get a number <i>more</i> than the <b>Chaos Counter</b> (Chaos Counter =
                number of <b>Chaos</b> cards in the environment + 1), then you are{" "}
                <span style={{ color: "var(--green)" }}>safe</span>.
              </li>
              <li>
                If you get <i>less than or equal</i> to the number of <b>Chaos</b> cards in the
                enviornment + 1, then you are <span style={{ color: "var(--red)" }}>hit</span> by
                the <b>Natural Disaster</b>.
              </li>
            </ul>
            <p>
              When <span style={{ color: "var(--red)" }}>hit</span> by the <b>Natural Disaster</b>,
              if you or another player use a <b>Relief Pack</b> card, you survive. If no{" "}
              <b>Relief Pack</b> card is used, then you are out of the game. Discard the <b>Natural Disaster</b> and <b>Relief Pack</b> cards after use.
            </p>
            <img src={reliefImg} height="200px" />
          </div>
        </div>

        <div className="Instructions-section">
          <div className="Instructions-section-title">WIN STATE</div>
          <div className="Instructions-section-content">
            <p>Collectively make it to the end of the game (no more cards left in the draw pile)</p>
            <p>- OR -</p>
            <p>
              Be the last one standing (everyone else has lost due to drawing natural disaster
              cards)
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="Instructions">
      <h2>
        How to play <i>Un-Natural Disasters</i>
      </h2>
      <div className="CardTemplate-buttons">
        <span
          className={cx("CardTemplate-button", !showOnline ? "selected" : "")}
          onClick={() => setShowOnline(false)}
        >
          In-person
        </span>
        <span
          className={cx("CardTemplate-button", !showOnline ? "" : "selected")}
          onClick={() => setShowOnline(true)}
        >
          Online
        </span>
      </div>
      { !showOnline
        ? instructions()
        : onlineInstructions()}
    </div>
  );
}
export default Instructions;
