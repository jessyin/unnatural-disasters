import CardTemplate from "./CardTemplate";

const GamePieces = () => {
  return (
    <>
      <div className="GamePieces-instructions">
        <h2>Game Pieces: What you'll need to play Un-Natural Disasters</h2>
        <p>
          Play online at:{" "}
          <a href="https://playingcards.io/d72tb7" target="_blank">
            https://playingcards.io/d72tb7
          </a>
        </p>
        <p>-or-</p>
        <p>1) Print out our premade cards, or create your own deck!</p>
        <p>
          2) A{" "}
          <a target="_blank" href="https://etc.usf.edu/clipart/37700/37712/spinner-08_37712_lg.gif">
            spinner
          </a>{" "}
          with numbers 1-8, or an{" "}
          <a target="_blank" href="https://www.printableboardgames.net/preview/8-Sided_Die">
            8-sided die
          </a>
          .
        </p>
      </div>
      <CardTemplate />
    </>
  );
};

export default GamePieces;
